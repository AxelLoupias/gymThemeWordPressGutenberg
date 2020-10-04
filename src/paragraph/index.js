const {addFilter} = wp.hooks;
const {SelectControl, PanelBody, ToggleControl} = wp.components;
const {InspectorControls} = wp.blockEditor;
const {useState} = wp.element;


const filterBlocks = (settings, name) => {
    if (name !== 'core/paragraph') {
        return settings
    }
    const Wrapper = ({children, condition, wrapper}) =>
        condition ? wrapper(children) : children

    const newSettings = {
        ...settings,
        attributes: {
            ...settings.attributes,
            containerTheme: {
                type: 'boolean',
                default: false
            }
        },
        edit: (props) => {
            const {attributes: {containerTheme}, setAttributes} = props;
            const updateContainerTheme = (containerTheme) => {
                setAttributes({containerTheme: containerTheme});
            }
            return (
                <>
                    <InspectorControls >
                        <PanelBody
                            title='Opciones del Theme'
                            initialOpen={false}
                        >
                            <ToggleControl
                                label='Estilo del theme'
                                checked={containerTheme}
                                onChange={updateContainerTheme}
                            />
                        </PanelBody >
                    </InspectorControls >
                    <Wrapper
                        condition={containerTheme}
                        wrapper={children => {
                            return (
                                <section className='text-divider' >
                                    <div className='container-lg' >
                                        {children}
                                    </div >
                                </section >
                            )
                        }} >
                        {settings.edit(props)}
                    </Wrapper >
                </>
            )

        },
        save: (props) => {
            return (
                <div
                    className='my-custom-wrapper'
                    style={{background: 'pink'}}
                >
                    {settings.save(props)}
                </div >
            )
        }
    }

    return newSettings; // now with pink backgrounds!
}

addFilter(
    'blocks.registerBlockType',
    'example/filter-blocks',
    filterBlocks
)