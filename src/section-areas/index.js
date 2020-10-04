import GlobalsAttributes from "../globalsAttributes";

const {registerBlockType} = wp.blocks;
const {MediaUpload, RichText, ColorPalette, InspectorControls} = wp.blockEditor;
const {Button, PanelBody, TextControl, Icon} = wp.components;

registerBlockType(GlobalsAttributes.slugCategory + '/section-areas',
    {
        title: 'GymTheme Section Areas',
        category: GlobalsAttributes.slugCategory, //Categoría que hemos dado de alta en los bloques
        attributes: {
            imagenHero: {
                type: 'string',
                selector: '.hero'
            },
            textArray: {
                type: 'array',
                default: [
                    {img: '', text: ''},
                    {img: '', text: ''},
                    {img: '', text: ''},
                    {img: '', text: ''}
                ]

            },

        },

        edit: (props) => {
            const {attributes: {textArray}, setAttributes} = props;

            console.log(textArray);
            const updateFields = (val, index, field,) => {
                let newTextArray = [...textArray];
                newTextArray[index][field] = val;
                setAttributes({
                    textArray: newTextArray,
                });
            }
            return (
                <>
                    <section className='section-areas alignfull' >
                        <div className='container-fluid' >
                            <ul className='content-areas' >
                                {textArray.map((text, index) => (
                                    <li className='area' >
                                        <div className='content-buttons' >
                                            <MediaUpload
                                                onSelect={(value) => updateFields(value.sizes.full.url, index, 'img')}
                                                type='image'
                                                render={({open}) => (
                                                    <Button
                                                        className='gymTheme-agregar-imagen'
                                                        onClick={open}
                                                        icon='format-image'
                                                        showTooltip='true'
                                                        label='Cambiar Imagen'
                                                        style={
                                                            text.img != undefined ? {color: '#fff'} : {}
                                                        }
                                                    />
                                                )}
                                            />
                                            <Button
                                                className='gymTheme-borrar-imagen'
                                                onClick={(value) => updateFields(undefined, index, 'img')}
                                                icon={() => {
                                                    //Utilizar un componente button con un icono dashicon
                                                    return <Icon
                                                        icon='trash'
                                                    />
                                                }}
                                                style={
                                                    text.img != undefined ? {color: '#fff'} : {}
                                                }
                                                showTooltip='true'
                                                label='Borrar imagen'
                                            />
                                        </div >

                                        {/*Verificamos que hay una imagen seleccionada*/}
                                        {text.img != undefined &&
                                        <img src={text.img} />
                                        }
                                        <p ><RichText
                                            placeholder={'Agrega el Título del Hero'}
                                            onChange={(value) => updateFields(value, index, 'text')}
                                            value={text.text}
                                        /></p >
                                    </li >
                                ))}
                            </ul >
                        </div >
                    </section >

                </>

            );
        },
        save: (props) => {
            // const {attributes: {imagenHero, textHero, tituloHero, alinearContenido}, setAttributes} = props;
            return (

                <section className='section-areas' >
                    <ul className='content-areas' >
                        <li className='area' ><img src='images/area-yoga-700x400.jpg' />
                            <p >Area de yoga</p >
                        </li >
                        <li className='area' ><img src='images/area-pesas-700x400.jpg' />
                            <p >Area de pesas</p >
                        </li >
                        <li className='area' ><img src='images/area-cardio-700x400.jpg' />
                            <p >Area de cardio</p >
                        </li >
                        <li className='area' ><img src='images/area-aparatos-700x400.jpg' />
                            <p >Area de aparatos</p >
                        </li >
                    </ul >
                </section >

            );
        }

    }
);