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
        title: {
            type: 'string',
            default: null
        },
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
		const { title, list, textColor, themeIcons } = attributes;
        function onChangeTitle(newtitle){
            setAttributes({title: newtitle})
        }
        function renderIcon(icon){ return(icon) }

        function singleItem( name, link){
            return(                  
                <li className="kitely-social-list-item">
                    <a href={link} target="_blank" rel="noopener">
                        <div className="kt-icon" style={{color:textColor}}>{renderIcon(themeIcons[name])}</div>     
                    </a>
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
                <RichText 
                    value={title}
                    onChange={onChangeTitle}
                    tagName="H6"
                    style={{color:textColor}}
                />
                <ul className="kitely-social-list">
                    {  renderList(list) }    
                </ul>    
            </div>
        
        ])
	},
    save({attributes}){
        const {title, list, textColor, themeIcons } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name, link){
            return(                  
                <li className="kitely-social-list-item">
                    <a href={link} target="_blank" rel="noopener">
                        <div className="kt-icon" style={{color:textColor}}>{renderIcon(themeIcons[name])}</div>     
                    </a>
                </li>
            )
        }
        function renderList(list){  
            return(
                list.map( (item, index) =>  Object.keys(item).map(function (key) { 
                    const link = item[key];
                    return( singleItem(key, link) )
                }))
            )   
        }

        return (
            
            <div className="theme-contactsocial">
                <h6 style={{color: textColor}}>{title}</h6>
                <ul className="kitely-social-list">
                    { renderList(list) }    
                </ul>    
            </div>
        )
    }
});
