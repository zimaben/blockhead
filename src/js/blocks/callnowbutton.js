import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 
const { RichText, InspectorControls, ColorPalette } = wp.blockEditor; 
const { PanelBody, TextControl   } = wp.components;

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];

console.log(foreground.color, background.color);
console.log(theme_info.themesettings.contact.phone);
console.log(kitely_icons.kitelytech)

registerBlockType('themeblockhead/callnowbutton', { 
 
	title: 'Kitely Button - Call Now', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        bgColor: {
            type: 'string',
			default:foreground.color
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
            default: theme_info.themesettings.contact.phone
        },
        countryCode: {
            type: 'string',
            default: (typeof theme_info.themesettings.contact.countrycode === "undefined") ? "1" : theme_info.themesettings.contact.countrycode
        }

    },   

	edit({attributes, setAttributes}){
		const { bgColor, textColor, buttonIcon, phoneNumber, countryCode } = attributes;

        function onBGColorChange(newcolor){
        	setAttributes({ bgColor: newcolor });
        }
        function onTextColorChange(newcolor){
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
					<p><strong>Background Color:</strong></p>
                    <ColorPalette
                        value={bgColor}
                        onChange={onBGColorChange}
                    />

                    <p><strong>Text Color</strong></p>
                    <ColorPalette
                        value={textColor}
                        onChange={onTextColorChange}
                    />

				</PanelBody>
			</InspectorControls>,
			<div className="button kitelybutton callnow" style={{ backgroundColor:bgColor }}>          
                <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> 
                <RichText   key="editable" 
                            tagName="A"
                            value={phoneNumber}
                            onChange={onChangePhone}
                            style={{ color:textColor }}
                />
            </div>
		]);
	},
	save({attributes}) {
		const { bgColor, textColor, buttonIcon, phoneNumber, countryCode } = attributes;
        function renderIcon(icon){ return(icon) }
		return (
			<div className="button kitelybutton callnow" style={{ backgroundColor:bgColor }}>    
                <a href={ 'tel:+' + countryCode + '.' + phoneNumber } style={{color:textColor}}>
                   <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> { phoneNumber } 
                </a>
            </div>
		)
	}
});
