import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'


const { registerBlockType } = wp.blocks;
const { PanelBody, ColorPalette } = wp.components;
const { InspectorControls, TextControl } = wp.blockEditor; 

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
			default: "https://widget.clutch.co/static/js/widget.js"
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
                    <label>Widget Code for the left</label>
                    <input
                        style={{width:"300px"}}
                        className="editor-widget-input"
                        value={ widgetCodeLeft }
                        onChange={onwidgetCodeLeft}
                    />
                    </div>
                    <div class="prefooter-right">
                        <label>label="Widget Code for the right"</label>
                        <input
                            style={{width:"300px"}}
                            className="editor-widget-input"
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
                       <script type="text/javascript" src={widgetCodeLeft}></script>
                    </div>
                    <div class="prefooter-right">
                       
                        <iframe id="iframe-0.641990562456112" frameborder="0" width="100%" height="62px" scrolling="no" src="https://upcity.com/profiles/10807/reviews/widget/2?ref_domain=kitelytech.com"></iframe>
                    </div> 
                </div>       
            </div>
        )
    }
});
