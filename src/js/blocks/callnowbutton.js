import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 
const { RichText, InspectorControls, ColorPalette } = wp.blockEditor; 
const { PanelBody, TextControl   } = wp.components;

const foreground = Object.entries(theme_info.settings.color.palette).filter( ([key, value]) => value == "foreground" );
const background = Object.entries(theme_info.settings.color.palette).filter( ([key, value]) => value == "background" );

registerBlockType('themeblockhead/callnowbutton', { 
 
	title: 'Kitely Button - Call Now', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech/buttons', 
    //attributes
    attributes: {
        bgColor: {
            type: 'string',
			source: 'html',
			default:background.color
        },
        textColor: {
            type: 'string',
            source: 'html',
            default: foreground.color
            
        },
        buttonIcon: {
            type: 'object',
            selector: '.kt-icon',
            default: kitely_icons.phone
        },
        phoneNumber: {
            type: 'string',
            source: 'html',
            selector: 'div',
            default: theme_info.themesettings.contact.phone
        },
        countryCode: {
            type: 'string',
            source: 'html',
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
			<div className="button kitelybutton callnow" style={{backgroundColor: bgColor}}>          
                <span class="kt-icon">{renderIcon(buttonIcon)}</span>
                <RichText   key="editable" 
                            tagName="SPAN"
                            value={phoneNumber}
                            onChange={onChangePhone}
                            style={{ color: textColor }}
                /> <br />
                <span>( current link: { 'tel:+' + countryCode + '.' + phoneNumber } )</span>
            </div>
		]);
	},
	save({attributes}) {
		const { bgColor, textColor, buttonIcon, phoneNumber, countryCode } = attributes;
        function renderIcon(icon){ return(icon) }
		return (
			<div className="button kitelybutton callnow">
                <a href={ 'tel:+' + countryCode + '.' + phoneNumber }>
                   <span class="kt-icon">{renderIcon(buttonIcon)}</span> { phoneNumber } 
                </a>
            </div>
		)
	}
});
