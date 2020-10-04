import GlobalsAttributes from "../globalsAttributes";

const {registerBlockType} = wp.blocks;
const {MediaUpload, RichText, URLInputButton, BlockControls, AlignmentToolbar, InspectorControls} = wp.blockEditor;
const {Button, PanelBody, TextControl} = wp.components;


registerBlockType(GlobalsAttributes.slugCategory + '/hero',
    {
        title: 'La Pizzeria Hero',
        // icon: {src: Logo},
        category: GlobalsAttributes.slugCategory, //Categoría que hemos dado de alta en los bloques
        attributes: {
            imagenHero: {
                type: 'string',
                selector: '.hero-block'
            },
            tituloHero: {
                type: 'string',
                source: 'html',
                selector: '.hero-block h1.titulo'
            },
            textoHero: {
                type: 'string',
                source: 'html',
                selector: '.hero-block p'

            },
            urlHero: {
                type: 'string',
                source: 'attribute',
                attribute: 'href'

            },
            alturaHero: {
                type: 'number',
                default: 500 //Valor por defecto
            }
        },
        //Para permitir que el bloque sea fullscreen o dentro del contenedor, para que funcione hay que agregar una linea al functions
        // add_theme_support('align-wide');
        // Y darle los estilos necesarios
        // Para que funcione correctamente no se puede usar fragments <> </>
        supports: {
            align: ['wide', 'full']
        },
        edit: (props) => {
            const {attributes: {imagenHero, textoHero, tituloHero, urlHero, alturaHero}, setAttributes} = props;
            const onSeleccionarImagen = (nuevaImagen) => {
                setAttributes({imagenHero: nuevaImagen.sizes.full.url});
            };

            const onChangeTitulo = (nuevoTitulo) => {
                setAttributes({tituloHero: nuevoTitulo});
            };

            const onChangeTexto = (nuevoTexto) => {
                setAttributes({textoHero: nuevoTexto});
            };

            const onChangeURL = (nuevaURL) => {
                setAttributes({urlHero: nuevaURL});
            }


            const onChangeAlturaHero = (nuevaAltura) => {
                setAttributes({alturaHero: nuevaAltura});
            }

            return (
                <>
                    <InspectorControls >
                        <PanelBody
                            title='Altura Hero'
                            initialOpen={true}
                        >
                            <div className='components-base-control' >
                                <div className='components-base-control__field' >
                                    <label className='components-base-control__label' >
                                        Altura en px
                                    </label >
                                    <TextControl
                                        type='number'
                                        max='700'
                                        min='300'
                                        step='10'
                                        value={alturaHero} //{alturaHero || 500} Serviría tambien si no funcionase el default
                                        onChange={onChangeAlturaHero}
                                    />
                                </div >
                            </div >
                        </PanelBody >
                    </InspectorControls >


                    <div className='hero-block'
                        //Para poder escapar varaibles con texto
                         style={{
                             backgroundImage: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url(${imagenHero})`,
                             textAlign: alinearContenido,
                             height: `${alturaHero}px`
                         }} >

                        <MediaUpload
                            onSelect={onSeleccionarImagen}
                            type='image'
                            render={({open}) => (
                                <Button
                                    className='gymTheme-agregar-imagen'
                                    onClick={open}
                                    icon='format-image'
                                    showTooltip='true'
                                    label='Cambiar Imagen'
                                />
                            )}
                        />
                        <div className='contenido-hero' >
                            <h1 className='titulo' >
                                <RichText
                                    placeholder={'Agrega el Título del Hero'}
                                    onChange={onChangeTitulo}
                                    value={tituloHero}
                                />
                            </h1 >
                            <p >
                                <RichText
                                    placeholder={'Agrega el Texto del Hero'}
                                    onChange={onChangeTexto}
                                    value={textoHero}
                                />
                            </p >
                            <div className='' >
                                <a href={urlHero} className='boton boton-primario' >Leer Más</a >
                            </div >
                            <URLInputButton
                                onChange={onChangeURL}
                                url={urlHero}
                            />
                        </div >
                    </div >

                </>

            );
        },
        save: (props) => {

            const {attributes: {imagenHero, textoHero, tituloHero, urlHero, alinearContenido, alturaHero}} = props;

            return (

                <div className='hero-block'
                    //Para poder escapar varaibles con texto
                     style={{
                         backgroundImage: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url(${imagenHero})`,
                         textAlign: alinearContenido,
                         height: `${alturaHero}px`
                     }} >
                    <div className='contenido-hero' >
                        <h1 className='titulo' >
                            <RichText.Content value={tituloHero} />
                        </h1 >
                        <p >
                            <RichText.Content value={textoHero} />
                        </p >
                        <div className='' >
                            <a href={urlHero} className='boton boton-primario' >Leer Más</a >
                        </div >
                    </div >
                </div >


            );
        }
    }
);
