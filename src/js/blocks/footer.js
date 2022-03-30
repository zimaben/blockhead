import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'

const { registerBlockType } = wp.blocks; 
const { InnerBlocks } = wp.editor; 
const { InspectorControls } = wp.blockEditor; 
const {PanelBody,ColorPalette, SelectControl } = wp.components

wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );

const TEMPLATE = [

    [ "core/columns", {className:"prefooter-row"},
        [

            [ "core/column",
                { className: "prefooter-col left"},
                [
                    ["core/html", { className: "kitely-review" }]
                ]
            ],
            [ "core/column",
                { className: "prefooter-col mid"},
                [
                    ["core/html", { className: "kitely-review" }]
                ]
            ],
            [ "core/column",
                { className: "prefooter-col right"},
                [
                    ["core/html", { className: "kitely-review" }]
                ]
            ]
        ]
    ],
    [
		"core/columns", {},
		[
			[
				"core/column", { className: "footer-col"},
				[
					["core/image", { className: "footer-logo" }],
					["themeblockhead/phonelist", {}] 
				]
			], 
			[
				"core/column", { className: "footer-col"},
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
                    
					["themeblockhead/sociallist", {} ],
                    ["themeblockhead/sociallist", {} ],
                    [ "core/heading", { placeholder: "Newsletter Subscription", className: "newsletter-title" } ],
                    ["themeblockhead/newsletter", {} ],
                    

				]
			],
		]
	],
    ["core/paragraph", {className:"kitely-post-footer"} ]
];

registerBlockType('themeblockhead/footer', { 
 
	title: 'KitelyTech Footer', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        footerType: {
            type: 'string',
			default: 'normal'
        },
        footerColor: {
            type: 'string',
            default: "#222222"
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


        return ([
            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Footer Settings'>
                    
                    <p><strong>Footer Background Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ footerColor } onChange={ onChangeBackgroundColor }/> 
                    
                    <p><strong>Footer Type</strong></p>
                    <SelectControl
                        label="Seledt Footer Type"
                        value={ footerType }
                        options={ [
                            { 
                                label: 'Default', 
                                value: 'normal' },
                            { 
                                label: 'Evenly Spaced', 
                                value: 'space-around' },
                            { 
                                label: 'Centered', 
                                value: 'menu-center' }   
                        
                            ] }
                        onChange={ onChangeFooterType }
						/>
                </PanelBody>  
            </InspectorControls>,
            <div className={'footerwrap'} style={{ backgroundColor:footerColor}}>
                <footer className={footerType + ' site-footer'}>     
                    <InnerBlocks
                        template={ TEMPLATE }
                        templateLock="all"
                    />
                </footer>    
        </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            footerType,
            footerColor
        } = attributes;

        return(
            <div className={'footerwrap'} style={{ backgroundColor:footerColor}}>
                    <footer className={footerType + ' site-footer'}>     
                        <InnerBlocks.Content
                            template={ TEMPLATE }
                            
                        />
                    </footer>    
            </div>
        )
    }
});
