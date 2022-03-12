const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, InspectorControls } = wp.editor; 
const { PanelBody, PanelRow, ToggleControl, SelectControl, Button, ColorPalette  } = wp.components;

registerBlockType('selfctrl-dashboard/textblock', { 
 
	title: 'Self CTRL Text Block', // Block title. 
    icon: 'superhero',  
    category: 'kitelytech', 
    //attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h4',
        }, 
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }, 
        bgColor: {
            type: 'string'
        },
        titleColor: {
            type: 'string'
        }
    },   

	edit({attributes, setAttributes}){
		 const {
            title,
            body,
            titleColor,
            bgColor

        } = attributes;
        const colors = [
            { name: 'Black', color: '#000' },
            { name: 'White', color: '#fff' },
            { name: 'Self CTRL Blue', color: '#0085ff' },
        ];
        function onTitleColorChange(newcolor){
        	setAttributes({ titleColor: newcolor });
        }
        function onChangeTitle(newtitle){
        	setAttributes({ title: newtitle });
        }
        function onChangeBody(newbody){
        	setAttributes({ body: newbody });
        }
        function onBodyColorChange(newcolor){
        	setAttributes({ bgColor: newcolor });
        }
		return ([
			<InspectorControls style={{marginBottom: '20px' }}>
				<PanelBody title={'Change Title Color'}>
				<p><strong>Change Title Color</strong></p>
				<ColorPalette colors={colors}
							  value={ titleColor }
							  onChange={ onTitleColorChange} />
				<p><strong>Change Background Color</strong></p>
				<ColorPalette colors={colors}
							  value={ bgColor }
							  onChange={ onBodyColorChange} />
				
				</PanelBody>
			</InspectorControls>,
			<section className="selfctrl-section">
					<div className="assessment-block" style={{ backgroundColor: bgColor }}>

					<RichText 	key="editable"
								tagName="h4" 
								className="block-title"
								placeholder="Text Block Title" 
								value={title}
								onChange={onChangeTitle} 
								style={{color:titleColor}}
					/>
					<RichText 	key="editable"
								tagName="p"
								className="assessment-text"
								placeholder="Block Body Text"
								value={body}
								onChange={onChangeBody} 
					/>
				</div>
			</section>
		]);
	},

	save({attributes}) {
		const {
            title,
            body,
            titleColor,
            bgColor

        } = attributes;
		return (
		<section className="selfctrl-section">
			<div className="assessment-block" style={{backgroundColor: bgColor}}>
				<h4 className="block-title" style={{color: titleColor}}>{title}</h4>

				<RichText.Content className="assessment-text" tagName="p" value={body} />
			</div>
		</section>
			
		);
	},
});