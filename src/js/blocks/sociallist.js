import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 
const {InspectorControls, RichText} = wp.blockEditor;
const { PanelBody, ColorPalette} = wp.components;

registerBlockType('themeblockhead/sociallist', { 
    apiVersion: 2,
	title: 'KitelyTech Social Links', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        list: {
            type: 'object',
			default:theme_info.themesettings.contact.social
        },

        textColor: {
            type: 'string'
        },
        themeIcons:{
            type: 'object',
            default:kitely_icons
        }

    },   

	edit({attributes, setAttributes}){
		const { list, textColor, themeIcons } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name, link){
            return(                  
                <li className="kitely-social-list-item">

                        <div className="kt-icon" style={{color:textColor}}>{renderIcon(themeIcons[name])}</div>     

                </li>
            )
        }
        function onChangeTextColor(newcolor){
            setAttributes({ textColor: newcolor})
        }
        function renderList(list){  
            return(
                list.map( (item, index) =>  Object.keys(item).map(function (key) { 
                    const link = item[key];
                    return( singleItem(key, link) )
                }))
            )   
        }

        return ([
            <InspectorControls>
                <PanelBody title='Footer Settings'>
                    <p><strong>List Text Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ textColor } onChange={ onChangeTextColor }/> 
                </PanelBody> 
            </InspectorControls>,
            <div className="theme-contactsocial">
                
                <ul className="kitely-social-list">
                    {  renderList(list) }    
                </ul>    
            </div>
        
        ])
	},
    save({attributes}){
        const { list, textColor, themeIcons } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name,icon, link){
            return(                
                <li className="kitely-social-list-item">
                    <a href={link} title={name}>
                        <div class="kt-icon" style={{color:textColor}}>{renderIcon(icon)}</div>     
                    </a>
                </li>
            )
        }
        function renderList(list){  
            Object.keys(list).map(function (key) {
                let icon = themeIcons[key]
                let link = list[key]
                return( singleItem(key, icon, link) )
            })
        }

        return (
            
            <div className="theme-contactsocial">
                
                <ul className="kitely-social-list">
                    {renderList(list)}    
                </ul>    
            </div>
        )
    }
});
