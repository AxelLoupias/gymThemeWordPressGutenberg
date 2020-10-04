import GlobalsAttributes from "../globalsAttributes";

const {registerBlockType} = wp.blocks;
const {RichText, ColorPalette, InspectorControls} = wp.blockEditor;
const {PanelBody, TextControl} = wp.components;

registerBlockType(GlobalsAttributes.slugCategory + '/text',
    {
        title: 'GymTheme Text',
        category: GlobalsAttributes.slugCategory, //Categoría que hemos dado de alta en los bloques
        attributes: {
            titleBlock: {
                type: 'string',
                source: 'html',
                selector: 'h2',
            },
            text: {
                type: 'string',
                source: 'html',
                selector: 'p'

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
            colorFondo: {
                type: 'string',
                default: ''
            }
        },
        edit: (props) => {
            const {attributes: {titleBlock, text, colorTitle, colorTexto, alinearContenido, colorFondo}, setAttributes} = props;

            const onChangeTitulo = (nuevoTitulo) => {
                setAttributes({titleBlock: nuevoTitulo});
            }

            const onChangeText = (nuevoText) => {
                setAttributes({text: nuevoText});
            }

            const onChangeColorTexto = (nuevoColor) => {
                setAttributes({colorTexto: nuevoColor});
            };

            const onChangeColorTitle = (nuevoColor) => {
                setAttributes({colorTitle: nuevoColor});
            };

            const onChangeColorFondo = (nuevoColor) => {
                setAttributes({colorFondo: nuevoColor});
            };

            return (
                <>
                    <InspectorControls >
                        <PanelBody
                            title='Color de Título'
                            initialOpen={true}
                        >
                            <ColorPalette
                                onChange={onChangeColorTitle}
                                value={colorTitle}
                            />

                        </PanelBody >
                        <PanelBody
                            title='Color de Texto'
                            initialOpen={false}
                        >
                            <ColorPalette
                                onChange={onChangeColorTexto}
                                value={colorTexto}
                            />
                        </PanelBody >
                        <PanelBody
                            title='Color de Fondo'
                            initialOpen={false}
                        >
                            <ColorPalette
                                onChange={onChangeColorFondo}
                                value={colorFondo}
                            />
                        </PanelBody >
                    </InspectorControls >


                    <section className='text-divider alignfull' style={{backgroundColor: colorFondo}} >
                        <div className='container-lg' >
                            <h2 style={{color: colorTitle}} >
                                <RichText
                                    placeholder={'Agrega Título'}
                                    onChange={onChangeTitulo}
                                    value={titleBlock}
                                />
                            </h2 >
                            <p style={{color: colorTexto}} >
                                <RichText
                                    placeholder={'Agrega texto'}
                                    onChange={onChangeText}
                                    value={text}
                                />
                            </p >
                        </div >
                    </section >

                </>

            );
        },
        save: (props) => {
            const {attributes: {titleBlock, text, colorTitle, colorTexto, colorFondo}} = props;
            return (

                <section className='text-divider alignfull' style={{backgroundColor: colorFondo}} >
                    <div className='container-lg' >
                        <h2 style={{color: colorTitle}} >
                            <RichText.Content value={titleBlock} />
                        </h2 >
                        <p style={{color: colorTexto}} >
                            <RichText.Content value={text} />
                        </p >
                    </div >
                </section >

            );
        }
    }
);