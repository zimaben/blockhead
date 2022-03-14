import kitely_icons from './icons.js';
import theme_info from '../../../theme.json'


const { registerBlockType } = wp.blocks;
const { PanelBody, ColorPalette, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor; 

const foreground = theme_info.settings.color.palette.filter( item => item.slug === "foreground" )[0];
const background = theme_info.settings.color.palette.filter( item => item.slug === "background" )[0];

const TEMPLATE = [
    [ 'themeblockhead/headerlogo', {} ], 
    [ 'core/navigation', {} ],
    [ 'themeblockhead/callnowbutton', {} ],
];


wp.blocks.updateCategory( 'kitely', { icon: kitely_icons.kitelytech } );
 
registerBlockType('themeblockhead/header', { 
 
	title: 'Kitely Tech Header', 
	icon: kitely_icons.kitelytech,
    category: 'kitelytech', 
    //attributes
    attributes: {
        bgColor: {
            type: 'string',
			default: null
        },
        headerStyle: {
            type: 'string',
			default: 'normal'
        }
    },  

    //functions

    edit({attributes, setAttributes}){

        const {
            headerStyle,
            bgColor
        } = attributes;

        function onChangeHeaderStyle( newstyle ){
            setAttributes({headerStyle: newstyle})
        }
        function onChangeBackgroundColor( newcolor ){
            setAttributes({bgColor: newcolor})
        }

        function returnBlocks(){
            if(bgColor){
                return(   
                    <header className={headerStyle + ' site-header'} style={{ backgroundColor:bgColor}}>     
                        <InnerBlocks
                            template={ TEMPLATE }
                            templateLock="all"
                        />
                    </header>                          
                )
            } else {
                return (
                    <header className={headerStyle + ' site-header'}>     
                    <InnerBlocks
                        template={ TEMPLATE }
                        templateLock="all"
                    />
                </header>    
                )
            }
        }



        return ([

            <InspectorControls style={{marginBottom: '20px' }}>
                <PanelBody title='Header Settings'>
                    
                    <p><strong>Background Color</strong></p>      
                    <ColorPalette colors={theme_info.settings.color.palette} value={ bgColor } onChange={ onChangeBackgroundColor }/> 

                    <p><strong>Set Header Type</strong></p>
                    <SelectControl
                        label="Header Type"
                        value={ headerStyle }
                        options={ [
                            { 
                                label: 'Default', 
                                value: 'normal' },
                            { 
                                label: 'Evenly Spaced', 
                                value: 'space-around' },
                            { 
                                label: 'Navigation Centered', 
                                value: 'menu-center' },
                            { 
                                label: 'Logo Centered', 
                                value: 'logo-center' }     
                        
                            ] }
                        onChange={ onChangeHeaderStyle }
						/>

                </PanelBody>  
            </InspectorControls>,
                <div className="site-header-wrap">
                    { returnBlocks() }       
                </div>
        
            ]);
        
    },
    save({attributes}){ 
        const {
            headerStyle,
            bgColor
        } = attributes;

        function returnBlocks(){
            if(bgColor){
                return(   
                    <header className={headerStyle + ' site-header'} style={{ backgroundColor:bgColor}}>     
                        <InnerBlocks.Content />
                    </header>                          
                )
            } else {
                return (
                    <header className={headerStyle + ' site-header'}>     
                        <InnerBlocks.Content />
                    </header>    
                )
            }
        }

        return(
            <div className="site-header-wrap">
               { returnBlocks() }
            </div>
        )
    }
});
