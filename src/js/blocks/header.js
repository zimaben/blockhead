import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'

const { registerBlockType } = wp.blocks;
const { PanelBody, ColorPalette, Button } = wp.components;
const TEMPLATE = [
    [ 'themeblockhead/headerlogo', {} ], 
    [ 'core/image', {} ],
    [ 'core/buttons', {} ],
];
const { RichText, InspectorControls, InnerBlocks } = wp.blockEditor; 

wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );
 
registerBlockType('themeblockhead/header', { 
 
	title: 'Kitely Tech Header', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        bgImage: {
            type: 'string',
			source: 'html',
			default:null
        },
        altText: {
            type: 'string',
			source: 'html',
			default:''
        }
    },  

    //functions

    edit({attributes, setAttributes}){

        const {
            title,
            titleColor,
            bgColor,
            showForm

        } = attributes;

        console.log(theme_info)
        /* Not sure why this isn't coming through from theme support: theme colors */
        const colors = [
            { name: 'Black', color: '#000' },
            { name: 'White', color: '#fff' },
            { name: 'Self CTRL Blue', color: '#0085ff' }, 
        ];
        
        function toggleShowForm( ){
            setAttributes({showForm: !showForm})
        }

        function onChangeTitle( newtext ){
            setAttributes({title: newtext})
        }
        function onChangeTitleColor( newcolor ){
            setAttributes({titleColor: newcolor})
        }
        function onChangeBackgroundColor( newcolor ){
            setAttributes({bgColor: newcolor})
        }
        function returnBlocks(){
            return(   
                <div className="assessment-section">     
                    <InnerBlocks
                        template={ TEMPLATE }
                        templateLock="all"
                    />
                </div>                          
            )
        }



        return ([

            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Self CTRL Call To Action Button Settings'>
                    
                    <p><strong>Set Background Color</strong></p>
                    <ColorPalette colors={colors} value={ bgColor } onChange={ onChangeBackgroundColor }/> 

                    <p><strong>Set Text Color</strong></p>
                    <ColorPalette colors={colors} value={ titleColor } onChange={ onChangeTitleColor } />

                    </PanelBody>  
                </InspectorControls>,
                <div className="assessment-block-wrap">
                    {showForm && returnBlocks() }       
                    <RichText key="editable"
                        tagName="div"
                        placeholder="Button Text"
                        value={ showForm ? "cancel" : title }
                        onChange={ onChangeTitle }
                        onDoubleClick={ toggleShowForm }
                        style={{ backgroundColor: bgColor, color: titleColor  }}
                        className="button selfctrlbutton"
                    />

                </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            title,
            titleColor,
            bgColor
        } = attributes;
        return(
            <div className="assessment-section">
                <InnerBlocks.Content />
                <div
                    style={{backgroundColor:bgColor, color:titleColor}} 
                    data-button-state="initial" 
                    onclick="toggleCommitForm(event);" 
                    data-toggle-text="Nevermind"
                    className="button selfctrlbutton">{title}</div>
            </div>
        )
    }
});
