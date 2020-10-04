import GlobalsAttributes from "../globalsAttributes";

const {registerBlockType} = wp.blocks;
const {MediaUpload, RichText, ColorPalette, InspectorControls} = wp.blockEditor;
const {Button, PanelBody, TextControl, Icon} = wp.components;

registerBlockType(GlobalsAttributes.slugCategory + '/hero',
    {
        title: 'GymTheme Hero',
        category: GlobalsAttributes.slugCategory, //Categoría que hemos dado de alta en los bloques
        attributes: {
            imagenHero: {
                type: 'string',
                selector: '.hero'
            },
            tituloHero: {
                type: 'string',
                source: 'html',
                selector: '.title'
            },
            textHero: {
                type: 'string',
                source: 'html',
                selector: '.subtitle'

            },
            colorTexto: {
                type: 'string',
            },
            colorTitle: {
                type: 'string',
            },
            alinearContenido: {
                type: 'string',
                default: 'center'
            },

        },
        edit: (props) => {
            const {attributes: {imagenHero, textHero, tituloHero, colorTexto, colorTitle, alinearContenido}, setAttributes} = props;

            const onChangeTitulo = (nuevoTitulo) => {
                setAttributes({tituloHero: nuevoTitulo});
            }

            const onChangeText = (nuevoText) => {
                setAttributes({textHero: nuevoText});
            }

            const onSeleccionarImagen = (nuevaImagen) => {
                setAttributes({imagenHero: nuevaImagen.sizes.full.url});
            };

            const borrarImagen = () => {
                setAttributes({imagenHero: undefined});
            }

            const onChangeColorTexto = (nuevoColor) => {
                setAttributes({colorTexto: nuevoColor});
            };

            const onChangeColorTitle = (nuevoColor) => {
                setAttributes({colorTitle: nuevoColor});
            };

            return (
                <>
                    <InspectorControls >
                        <PanelBody
                            title='Color de Título'
                            initialOpen={true}
                        >
                            <div className='components-base-control' >
                                <div className='components-base-control__field' >
                                    <label className='components-base-control__label' >
                                        Color de Título
                                    </label >
                                    <ColorPalette
                                        onChange={onChangeColorTitle}
                                        value={colorTitle}
                                    />
                                </div >
                            </div >
                        </PanelBody >
                        <PanelBody
                            title='Color de Texto'
                            initialOpen={false}
                        >
                            <div className='components-base-control' >
                                <div className='components-base-control__field' >
                                    <label className='components-base-control__label' >
                                        Color de Texto
                                    </label >
                                    <ColorPalette
                                        onChange={onChangeColorTexto}
                                        value={colorTexto}
                                    />
                                </div >
                            </div >
                        </PanelBody >
                    </InspectorControls >


                    <section className='hero alignfull'
                             style={{
                                 backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${imagenHero})`
                             }} >
                        <div className='button-groups' >
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

                            <Button
                                className='gymTheme-borrar-imagen'
                                onClick={borrarImagen}
                                icon={() => {

                                    //Utilizar un componente button con un icono dashicon
                                    return <Icon
                                        icon='trash'
                                    />
                                }}
                                // style={
                                //     imagenHero != undefined ? {color: '#fff'} : {}
                                // }
                                showTooltip='true'
                                label='Borrar imagen'
                            />
                        </div >

                        <div className='container' >
                            <div className='title '
                                 style={{color: colorTitle}} >
                                <RichText
                                    placeholder={'Agrega el Título del Hero'}
                                    onChange={onChangeTitulo}
                                    value={tituloHero}
                                    // style={
                                    //     imagenHero == undefined ? {color: '#000'} : {}
                                    // }
                                />
                            </div >
                            <div className='subtitle'
                                 style={{color: colorTexto}} >
                                <RichText
                                    placeholder={'Agrega el Título del Hero'}
                                    onChange={onChangeText}
                                    value={textHero}
                                />
                            </div >
                        </div >
                    </section >

                </>

            );
        },
        save: (props) => {
            const {attributes: {imagenHero, textHero, tituloHero, alinearContenido}, setAttributes} = props;
            return (

                <section className='hero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${imagenHero})`}} >
                    <div className='container' >
                        <div className='title' ><RichText.Content value={tituloHero} /></div >
                        <div className='subtitle' >
                            <RichText.Content value={textHero} />
                        </div >
                    </div >
                </section >

            );
        }

    }
);