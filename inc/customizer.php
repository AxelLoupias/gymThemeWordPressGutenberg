<?php

	add_action( 'customize_register', 'register_customizer_func' );
	function register_customizer_func ( $wp_customize )
	{
		// Add Customize Section
		$wp_customize->add_section( 'gymTheme_section', array(
			'title' => 'GymTheme Settings',
			'description' => 'GymTheme Settings'
		) );

		$wp_customize->add_setting( 'gymTheme_header_logo', array(//default value
		) );

		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'gymTheme_header_logo_control', array(
			'label' => 'Modificar imagen cabecera',
			'settings' => 'gymTheme_header_logo',
			'section' => 'gymTheme_section'
		) ) );

	}
