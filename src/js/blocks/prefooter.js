import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'


const { registerBlockType } = wp.blocks;
const { PanelBody, ColorPalette, SelectControl } = wp.components;
const { InspectorControls, RichText } = wp.blockEditor; 

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];

wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );
 
registerBlockType('themeblockhead/prefooter', { 
 
	title: 'KitelyTech Pre Footer', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        widgetCodeLeft: {
            type: 'string',
			default: null
        },
        widgetCodeRight: {
            type: 'string',
			default: null
        },
        preFooterColor: {
            type: 'string',
            default: null
        }
    },  

    //functions

    edit({attributes, setAttributes}){

        const {
            widgetCodeLeft,
            widgetCodeRight,
            preFooterColor
        } = attributes;

        function onwidgetCodeLeft( newcode ){
            setAttributes({widgetCodeLeft: newcode})
        }
        function onwidgetCodeRight( newcode ){
            setAttributes({widgetCodeRight: newcode})
        }
        function onChangeBackgroundColor( newcolor ){
            setAttributes({preFooterColor: newcolor})
        }

        return ([
            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Pre Footer Settings'>
                    
                    <p><strong>Prefooter Background Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ preFooterColor } onChange={ onChangeBackgroundColor }/> 

                </PanelBody>  
            </InspectorControls>,
                <div className="prefooter-wrap" style={{backgroundColor:preFooterColor}}>
                    <div className="prefooter-container">
                        <div class="prefooter-left">
                        <RichText
                            key="one"
                            tagName="div"
                            className="widget-left"
                            value={ widgetCodeLeft }
                            onChange={onwidgetCodeLeft}
                        />
                        </div>
                        <div class="prefooter-right">
                            <RichText
                                key="two"
                                tagName="div"
                                className="widget-right"
                                value={ widgetCodeRight }
                                onChange={onwidgetCodeRight}
                            />
                        </div>    
                    </div>
                       
                </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            widgetCodeLeft,
            widgetCodeRight,
            preFooterColor
        } = attributes;

        return(
            <div className="prefooter-wrap" style={{backgroundColor:preFooterColor}}>
                <div className="prefooter-container">
                    <div class="prefooter-left">
                    <RichText.Content
                        key="one"
                        tagName="div"
                        className="widget-left"
                        value={widgetCodeLeft}
                    />
                    </div>
                    <div class="prefooter-right">
                        <RichText.Content
                            key="two"
                            tagName="div"
                            className="widget-right"
                            value={widgetCodeRight}
                        />
                    </div>    
                </div>       
            </div>
        )
    }
});
