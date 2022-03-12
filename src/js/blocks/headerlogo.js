import kitely_icons from './icons.js';

const { registerBlockType } = wp.blocks; 
const { MediaUpload, InspectorControls } = wp.blockEditor; 
const { PanelBody, IconButton, TextControl   } = wp.components;


registerBlockType('themeblockhead/headerlogo', { 
 
	title: 'Kitely Upload Logo', 
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

	edit({attributes, setAttributes}){
		const { bgImage, altText } = attributes;

        function onAltTextChange(newtext){
        	setAttributes({ altText: newtext });
        }
        function onSelectImage(newImage){
        	setAttributes({ bgImage: newImage.url });
        }
		return ([
			<InspectorControls style={{marginBottom: '20px' }}>
				<PanelBody title="'Upload Logo Image">
					<p><strong>Upload file (.svg recommended)</strong></p>
					<MediaUpload
						onSelect={ onSelectImage }
						type="images"
						value={ bgImage }
						render= {( {open} ) =>{
							return (<IconButton
								onClick={ open }
								icon="upload" 
								className="editor-media-placeholder__button is-button is-default is-large"
							>
								Upload
							</IconButton>)
						}}
					/>
					<p><strong>Alt Text</strong></p>
					<TextControl 
					 value={altText}
					 onChange={onAltTextChange}
					 />
				</PanelBody>
			</InspectorControls>,
			<div className="logo">
				<a href="/">
					<img className="logo-img"
						 alt={altText}
						 src={bgImage}
					/>
				</a>
			</div>
		]);
	},
	save({attributes}) {
		const { bgImage, altText } = attributes;

		return (
			<div className="logo">
				<a href="/">
					<img className="logo-img"
						alt={altText}
						src={bgImage}
					/>
				</a>
			</div>	
		)
	}
});
