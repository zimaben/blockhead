import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'

const { registerBlockType } = wp.blocks; 
const { InnerBlocks } = wp.editor; 
const { InspectorControls } = wp.blockEditor; 
const {PanelBody } = wp.components

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];

wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );

const TEMPLATE = [
	[
		"core/columns",
		{},
		[
			[
				"core/column",
				{ className: "footer-col"},
				[
					["core/image", { className: "footer-loco" }],
					["core/list", { className: "pro-list" }]
				]
			],
			[
				"core/column",
				{ className: "footer-col"},
				[
					[ "core/heading", { placeholder: "Services", className: "footer-title" } ],
					["core/list", { className: "footer-list" }]
				]
			],
            [
				"core/column",
				{ className: "footer-col"},
				[
					[ "core/heading", { placeholder: "Help/Info", className: "footer-title" } ],
					["core/list", { className: "footer-list" }]
				]
			],
            [
				"core/column",
				{ className: "footer-col"},
				[
					["core/paragraph", { placeholder: "Placeholder Until We have Social Widgets", className: "footer-title" } ]
				]
			],

		]
	]
];

registerBlockType('themeblockhead/footer', { 
 
	title: 'KitelyTech Footer', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        footerType: {
            type: 'string',
			default: null
        },
        footerColor: {
            type: 'string',
            default: null
        }
    },  

    //functions

    edit({attributes, setAttributes}){

        const {
            footerColor,
            footerType
        } = attributes;

        function onChangeBackgroundColor( newcolor ){
            setAttributes({footerColor: newcolor})
        }
        function onChangeFooterType(newtype){
            setAttributes({footerType: newtype})
        }
        function returnBlocks(){
            if(footerColor){
                return(   
                    <footer className={footerType + ' site-footer'} style={{ backgroundColor:footerColor}}>     
                        <InnerBlocks.Content
                            template={ TEMPLATE }
                            templateLock="all"
                        />
                    </footer>                          
                )
            } else {
                return (
                    <footer className={footerType + ' site-footer'}>     
                        <InnerBlocks.Content
                            template={ TEMPLATE }
                            templateLock="all"
                        />
                    </footer>   
                )
            }
        }

        return ([
            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Footer Settings'>
                    
                    <p><strong>Footer Background Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ preFooterColor } onChange={ onChangeBackgroundColor }/> 

                </PanelBody>  
            </InspectorControls>,
            <div className={'footerwrap'}>
                { returnBlocks() }    
            </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            footerType,
            footerColor
        } = attributes;
        function returnBlocks(){
            if(footerColor){
                return(   
                    <footer className={footerType + ' site-footer'} style={{ backgroundColor:footerColor}}>     
                        <InnerBlocks.Content
                            template={ TEMPLATE }
                            templateLock="all"
                        />
                    </footer>                          
                )
            } else {
                return (
                    <footer className={footerType + ' site-footer'}>     
                        <InnerBlocks.Content
                            template={ TEMPLATE }
                            templateLock="all"
                        />
                    </footer>   
                )
            }
        }
        return(
            <div className={'footerwrap'}>
                { returnBlocks() }    
            </div>
        )
    }
});
