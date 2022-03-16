import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 
const {InspectorControls, RichText} = wp.blockEditor;
const { PanelBody, ColorPalette} = wp.components;

registerBlockType('themeblockhead/phonelist', { 
    apiVersion: 2,
	title: 'KitelyTech Dynamic Contact List', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        list: {
            type: 'object',
			default:theme_info.themesettings.contact.locations
        },
        buttonIcon: {
            type: 'object',
            default: kitely_icons.phone
        },
        textColor: {
            type: 'string'
        }

    },   

	edit({attributes, setAttributes}){
		const { list, textColor, buttonIcon } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name, phone){
            return(                
                <li>
                    <div className="kitelywidget callnow">    
                        <h6 style={{color:textColor}}>{name}</h6>
                        <div style={{color:textColor}}>
                        <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> 
                        <RichText value={ phone } />
                        </div>
                    </div>
                </li>
            )
        }
        function onChangeTextColor(newcolor){
            setAttributes({ textColor: newcolor})
        }
        function renderList(list){  

            list.map( (item, i) => { return( singleItem(item.name, item.phone) ) } ) 
            
        }

        return ([
            <InspectorControls>
                <PanelBody title='Footer Settings'>
                    <p><strong>List Text Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ textColor } onChange={ onChangeTextColor }/> 
                </PanelBody> 
            </InspectorControls>,
            <div className="theme-contactlist">
                <ul className="contacts">
                    {list.map( (item, index) => singleItem(item.name, item.phone)) }
                    {renderList(list)}    
                </ul>    
            </div>
        
        ])
	},
    save({attributes}){
        const { list, buttonIcon, textColor } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name, phone){
            return(
                <li>
                    <div className="kitelywidget callnow">    
                        <h6 style={{color:textColor}}>{name}</h6>
                        <a href={ 'tel:+' + phone} style={{color:textColor}}>
                        <span class="kt-icon" style={{color:textColor}}>{renderIcon(buttonIcon)}</span> { phone} 
                        </a>
                    </div>
                </li>
            )
        }
        function renderList(list){  

            list.map( (item, i) => { return( singleItem(item.name, item.phone) ) } ) 
            
        }

        return (
            
            <div className="theme-contactlist">
                <ul className="contacts">
                    {list.map( (item, index) => singleItem(item.name, item.phone)) }
                    {renderList(list)}    
                </ul>    
            </div>
        )
    }
});
