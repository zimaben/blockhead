import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'


const { registerBlockType } = wp.blocks;
const { PanelBody, ColorPalette, Button } = wp.components;
const { InspectorControls, RichText } = wp.blockEditor; 

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];

wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );
 
registerBlockType('themeblockhead/newsletter', { 
 
	title: 'KitelyTech Newsletter Widget', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        title: {
            type: 'string',
			default: null
        },
        text: {
            type: 'string',
			default: null
        },
        titleColor: {
            type: 'string',
            default: null
        },
        textColor:{
            type: 'string',
            default: null
        },
        placeHolder:{
            type: 'string',
        },
        buttonText:{
            type:'string'
        },
        buttonColor:{
            type:'string',
            default:null
        },
        emailIcon: {
            type: 'object',
            default: kitely_icons.email
        }

    },  

    //functions

    edit({attributes, setAttributes}){

        const {
            title, 
            text, 
            titleColor, 
            textColor, 
            placeHolder,
            buttonText,
            buttonColor,
            emailIcon
        } = attributes;

        function onChangeTitle( newtitle ){
            setAttributes({title: newtitle})
        }
        function onChangeTitleColor( newcolor ){
            setAttributes({titleColor: newcolor})
        }

        function onChangeText( newtext ){
            setAttributes({text: newtext})
        }
        function onChangeTextColor( newcolor ){
            setAttributes({textColor: newcolor})
        }
        function onChangeButtonText( newtext ){
            setAttributes({buttonTtext: newtext})
        }
        function onChangeButtonColor( newcolor ){
            setAttributes({buttontColor: newcolor})
        }

        return ([
            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Newsletter Settings'>
               
                    <p><strong>Newsletter Title Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ titleColor } onChange={ onChangeTitleColor }/> 
                    
                    <p><strong>Newsletter Text Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ textColor } onChange={ onChangeTextColor }/> 

                    <p><strong>Newsletter Button Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ buttonColor } onChange={ onChangeButtonColor }/> 
                    
                </PanelBody>  
            </InspectorControls>,
            <div className="newsletter-wrap">
            <div className="widget"> 
                <h3 className="newsletter-title">Newsletter Subscription</h3>
                <p className="sendgrid_widget_text">If you want to subscribe to our monthly newsletter, please submit the form below.</p>
                <form method="post" id="" className="newsletter_form" novalidate="novalidate">
                    <div className="sendgrid_mc_fields" style={{padding: "10px 0px 0px 0px;"}}>
                        <div className="sendgrid_mc_label_div">
                            <label for="sendgrid_mc_email" style={{color:"#fff;"}}>Email<sup>*</sup> :</label>
                        </div>
                        <div className="sendgrid_mc_input_div">
                            <input className="sendgrid_mc_input sendgrid_mc_input_email" id="newsletter_email" name="newsletter_email" type="text" value="" required="" />  
                        </div>
                    </div>
                    <div className="sendgrid_mc_button_div">
                        <input style={{margin: "10px 0px 0px 0px;"}} className="sendgrid_mc_button" type="submit" id="sendgrid_mc_email_submit" value="SUBSCRIBE" />
                    </div>
                </form>
            </div>  
        </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            title, 
            text, 
            titleColor, 
            textColor, 
            placeHolder,
            buttonText,
            buttonColor,
            emailIcon
        } = attributes;

        return(
            <div className="newsletter-wrap">
                <div className="widget"> 
                    <h3 className="newsletter-title">Newsletter Subscription</h3>
                    <p className="sendgrid_widget_text">If you want to subscribe to our monthly newsletter, please submit the form below.</p>
                    <form method="post" id="" className="newsletter_form" novalidate="novalidate">
                        <div className="sendgrid_mc_fields" style={{padding: "10px 0px 0px 0px;"}}>
                            <div className="sendgrid_mc_label_div">
                                <label for="sendgrid_mc_email" style={{color:"#fff;"}}>Email<sup>*</sup> :</label>
                            </div>
                            <div className="sendgrid_mc_input_div">
                                <input className="sendgrid_mc_input sendgrid_mc_input_email" id="newsletter_email" name="newsletter_email" type="text" value="" required="" />  
                            </div>
                        </div>
                        <div className="sendgrid_mc_button_div">
                            <input style={{margin: "10px 0px 0px 0px;"}} className="sendgrid_mc_button" type="submit" id="sendgrid_mc_email_submit" value="SUBSCRIBE" />
                        </div>
                    </form>
                </div>  
            </div>
        )
    }
});
