<?php
	if ( !defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

	define( 'GUTENBERG_SLUG', 'gym-theme' );


	add_action( 'after_setup_theme', 'theme_setup' );
	function theme_setup ()
	{
		/** post thumbnail **/
		add_theme_support( 'post-thumbnails' );
		/** Gutenberg support **/
		add_theme_support( 'align-wide' );

	}


	/** Crear categoría personalizada de bloques **/
	add_filter( 'block_categories', 'gymTheme_categoria_personalizada', 10, 2 );
	function gymTheme_categoria_personalizada ( $categories, $post )
	{

		$block_category = array(
			'title' => esc_html__( 'Módulos del Tema' ),
			'slug' => GUTENBERG_SLUG
		);
		$category_slugs = wp_list_pluck( $categories, 'slug' );

		if ( !in_array( $block_category['slug'], $category_slugs, true ) ) {
			$categories = array_merge(
				$categories,
				array(
					array(
						'title' => $block_category['title'], // Required
						'slug' => $block_category['slug'], // Required
						'icon' => null, // Slug of a WordPress Dashicon or custom SVG
						//Si se hace un custom SVG se tiene que importar por React
					),
				)
			);
		}
		return $categories;
	}


	/** Eliminamos la opcion del modo pantalla completa **/
	add_action( 'enqueue_block_editor_assets', 'disable_fullScreen_default' );
	function disable_fullScreen_default ()
	{
		$script = "window.onload = function() { const isFullscreenMode = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ); if ( isFullscreenMode ) { wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fullscreenMode' ); } }";
		wp_add_inline_script( 'wp-blocks', $script );
	}

	/**Registrar bloques, scripts, CSS**/
	add_action( 'init', 'gymTheme_registrar_bloques' );
	function gymTheme_registrar_bloques ()
	{

		//Si gutemberg no existe, salir
		if ( !function_exists( 'register_block_type' ) ) {
			return;
		}

		//Registrar los bloques en el editor
		wp_register_script(
			'gymTheme-editor-script',//handle
			get_template_directory_uri() . '/build/index.js',//Archivo con los bloques compilados
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), //Dependencias de gutemberg
			filemtime( get_template_directory() . '/build/index.js' ) //Para que siempre nos traiga la ultima version y no haya problemas de cache
		);

		//Estilos para el editor (unicamente)
		wp_register_style(
			'gymTheme-editor-styles',
			get_template_directory_uri() . '/css/editor.css',
			array( 'wp-edit-blocks' ), //Dependencias
			filemtime( get_template_directory() . '/css/editor.css' )
		);

		//Estilos para los bloques back y front
		wp_register_style(
			'gymTheme-frontend-styles',
			get_template_directory_uri() . '/css/styles.css',
			array( 'gymTheme-fonts' ), //Dependencias
			filemtime( get_template_directory() . '/css/styles.css' )
		);


		wp_register_style(
			'gymTheme-fonts',
			'https://fonts.googleapis.com/css?family=Open+Sans%7CRaleway%3A400%2C700%2C900%7CStaatliches&amp;amp;display=swap&amp;amp;ver=1.0.0',
			array(),
			null
		);


		//Arreglo de bloques NO Dinamicos
		$blocks = array(
//			'gymTheme/boxes', //Que tenga el mismo nombre que el bloque de la carpeta /src (recomendacion)
			GUTENBERG_SLUG . '/hero',
			GUTENBERG_SLUG . '/text',
			GUTENBERG_SLUG . '/section-areas'

		);

		//Recorrer bloques y agregar scripts y styles
		foreach ( $blocks as $block ) {
			register_block_type(
				$block,
				array(
					'editor_script' => 'gymTheme-editor-script', //Script principal para el editor
					'editor_style' => 'gymTheme-editor-styles', // Estilo para el editor
					'style' => 'gymTheme-frontend-styles' //Estilo para el frontend
				)
			);
		}
		wp_localize_script(
			'gymTheme-editor-script',
			'test',
			[ 'can_see' => false ]
		);


//		/* Registrar bloques dinámicos*/
//		register_block_type( 'gymTheme/menu', array(
//			'editor_script' => 'gymTheme-editor-script', //Script principal para el editor
//			'editor_style' => 'gymTheme-editor-styles', // Estilo para el editor
//			'style' => 'gymTheme-frontend-styles', //Estilo para el frontend
//			// Si es un bloque dinámico creado por php hay que establecer aqui los attributos por defecto
//			// Si en el admin se guardan los atributos por defecto estos no se van a enviar al lado servidor
//			// https://github.com/WordPress/gutenberg/issues/6187
//			'attributes' => array(
//				'cantidadMostrar' => array(
//					'type' => 'number',
//					'default' => 4
//				),
//				'tituloBloque' => array(
//					'type' => 'string',
//					'default' => 'Título Bloque Server'
//				)
//			),
//			'render_callback' => 'gymTheme_especialidades_front_end' // Función que hará la llamada a la BBDD
//		) );
	}

	add_action( 'wp_enqueue_scripts', 'gymTheme_enqueue_styles_scripts' );
	function gymTheme_enqueue_styles_scripts ()
	{
		wp_enqueue_style(
			'gymTheme-bootstrap',
			get_template_directory_uri() . '/css/bootstrap.min.css',
			array(),
			null
		);
		wp_enqueue_script( 'gymTheme-bootstrap',
			get_template_directory_uri() . '/js/bootstrap.bundle.min.js',
			array( 'jquery' ),
			'4.5.0',
			true
		);
		wp_enqueue_script( 'gymTheme-scripts',
			get_template_directory_uri() . '/js/scripts.js',
			array( 'jquery' ),
			'1.0.0',
			true
		);

	}

	add_action( 'init', 'gymThmeme_menus' );
	function gymThmeme_menus ()
	{
		register_nav_menus( array(
			'header-menu' => 'Header Menu',
		) );
	}


	require_once 'inc/customizer.php';
	require_once 'inc/BootstrapWalker.php';

	function test_taxonomy ()
	{
		$labels = array(
			'name' => _x( 'Genres', 'taxonomy general name', 'textdomain' ),
			'singular_name' => _x( 'Genre', 'taxonomy singular name', 'textdomain' ),
			'search_items' => __( 'Search Genres', 'textdomain' ),
			'all_items' => __( 'All Genres', 'textdomain' ),
			'parent_item' => __( 'Parent Genre', 'textdomain' ),
			'parent_item_colon' => __( 'Parent Genre:', 'textdomain' ),
			'edit_item' => __( 'Edit Genre', 'textdomain' ),
			'update_item' => __( 'Update Genre', 'textdomain' ),
			'add_new_item' => __( 'Add New Genre', 'textdomain' ),
			'new_item_name' => __( 'New Genre Name', 'textdomain' ),
			'menu_name' => __( 'Genre', 'textdomain' ),
		);

		$args = array(
			'hierarchical' => true,
			'labels' => $labels,
			'show_ui' => true,
			'show_in_rest' => true,//Necesario para que aparezca en el panel de gutenberg
			'show_admin_column' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'genre' ),
			'radio' => true,
		);

		register_taxonomy( 'genre', array( 'post' ), $args );
	}

	add_action( 'init', 'test_taxonomy', 0 );