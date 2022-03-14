import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 
const { RichText, InspectorControls, ColorPalette } = wp.blockEditor; 
const { PanelBody, TextControl   } = wp.components;

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];


registerBlockType('themeblockhead/phonelink', { 
 
	title: 'KitelyTech Phone Link', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: { 
        title: {
            type:'string'
        },
        textColor: {
            type: 'string',
            default: background.color
            
        },
        buttonIcon: {
            type: 'object',
            default: kitely_icons.phone
        },
        phoneNumber: {
            type: 'string',
            default: null
        },
        countryCode: {
            type: 'string',
            default: (typeof theme_info.themesettings.contact.countrycode === "undefined") ? "1" : theme_info.themesettings.contact.countrycode
        }

    },   

	edit({attributes, setAttributes}){
		const { title, textColor, buttonIcon, phoneNumber, countryCode } = attributes;

        function onChangeTitle(newtitle){
            setAttributes({title: newtitle})
        }
        function onChangeTextColor(newcolor){
            setAttributes({textColor: newcolor});
        }
        function onChangePhone(newphone){
            setAttributes({phoneNumber: newphone});
        }
        function onChangeCountryCode(newcode){
            setAttributes({countryCode: newcode});
        }
        function renderIcon(icon){ return(icon) }

		return ([
			<InspectorControls style={{marginBottom: '20px' }}>
				<PanelBody title={"Button Settings"}>
                    <p><strong>Country Code (default is 1 for U.S.):</strong></p>
                    <TextControl value={countryCode} onChange={onChangeCountryCode} />

                    <p><strong>Text Color:</strong></p>
                    <ColorPalette
                        value={textColor}
                        onChange={onChangeTextColor}
                    />

				</PanelBody>
			</InspectorControls>,
			<div className="kitelywidget callnow">   
                    <RichText   
                    key="title" 
                        tagName="h6"
                        value={title}
                        onChange={{onChangeTitle}}
                        style={{ color:textColor }}
                    />       
                <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> 

                    <RichText   
                        key="phone" 
                        tagName="span"
                        value={phoneNumber}
                        onChange={onChangePhone}
                        style={{ color:textColor }}
                    />
            </div>
		]);
	},
	save({attributes}) {
		const { title, textColor, buttonIcon, phoneNumber, countryCode } = attributes;
        function renderIcon(icon){ return(icon) }
		return (
			<div className="kitelywidget callnow">    
                <h6 style={{color:textColor}}>{title}</h6>
                <a href={ 'tel:+' + countryCode + '.' + phoneNumber } style={{color:textColor}}>
                   <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> { phoneNumber } 
                </a>
            </div>
		)
	}
});
