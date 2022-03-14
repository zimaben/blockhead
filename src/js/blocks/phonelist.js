import kitely_icons from './icons.js';
import theme_info from '../../../theme.json';

const { registerBlockType } = wp.blocks; 

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
    },   

	edit({attributes}){
		const { list, buttonIcon } = attributes;

        function renderIcon(icon){ return(icon) }

        function singleItem( name, phone){
            return(
                <li>
                    <div className="kitelywidget callnow">    
                        <h6>{name}</h6>
                        <a href={ 'tel:+' + phone}>
                        <span class="kt-icon">{renderIcon(buttonIcon)}</span> { phone} 
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
                {console.log(list)}
                <ul className="contacts">
                    {list.map( (item, index) => singleItem(item.name, item.phone)) }
                    {renderList(list)}    
                </ul>    
            </div>
        )
	}
});
