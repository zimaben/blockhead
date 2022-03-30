<?php 
namespace themeblockhead;

defined( 'ABSPATH') OR exit;

if( !class_exists( '\themeblockhead\Theme')) {

    class Theme {

        private static $instance = null;
        const version = "1.0.0";
        const mode = "development";
        const text_domain = "blockhead";

        public static function get_instance(){
            #singletons have feelings too
            if(null==self::$instance) self::$instance = new self;

            return self::$instance;
        }

        private function __construct(){
            #add themes, hooks, & libraries

            \add_filter('upload_mimes', array($this, 'svg_support'));
            \add_action('block_categories_all', array($this, 'register_theme_blocktype'));
            \add_action('init', array($this, 'theme_blocks'));
            \add_action( 'wp_head', array($this, 'theme_wp_head'));
            \add_action( 'wp_footer', array($this, 'theme_wp_footer'));

        }
        public static function register_theme_blocktype( $categories ){
            return array_merge(
                $categories, array( array('slug'=>'kitelytech', 'title'=>'KitelyTech Blocks', 'icon' => 'kitely'))
            );
        }

        public static function theme_wp_head(){
            \wp_enqueue_script( 'upcity_widget', 'https://s3.amazonaws.com/top-local-agencies/js/upcity_widget.js', array(), '1.0.0', false);
            \wp_enqueue_script( 'clutch_widget', 'https://widget.clutch.co/static/js/widget.js', array(), '1.0.0', false);
        }
        public static function theme_wp_footer(){
            #do footer server-side scripts
        }

        public static function theme_blocks(){
            #version is either a random cachebuster or the current version depending on theme mode
            $v = self::mode == "development" ? (string) bin2hex(random_bytes(2)) : self::version;

            #shared js/css
            \wp_register_style( 'theme_blocks_global_css', \get_template_directory_uri() . '/dist/style.css', array(), $v, 'all' );
            \wp_register_style( 'theme_blocks_editor_css', \get_template_directory_uri() . '/dist/editor.css', array(), $v, 'all' );
            \wp_register_script ( 'theme_blocks_global_js', \get_template_directory_uri() . '/dist/app.js', array('wp-blocks', 'wp-editor', 'wp-components'), $v, false );
            
            #block script
            \wp_register_script( 'headerlogo', \get_template_directory_uri() . '/dist/blocks/headerlogo.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/headerlogo', array(
                'editor_script' => 'headerlogo',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                 
            ) );
            #block script
            \wp_register_script( 'headercontainer', \get_template_directory_uri() . '/dist/blocks/header.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/header', array(
                'editor_script' => 'headercontainer',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'callnowbutton', \get_template_directory_uri() . '/dist/blocks/callnowbutton.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/callnowbutton', array(
                'editor_script' => 'callnowbutton',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'prefooter', \get_template_directory_uri() . '/dist/blocks/prefooter.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/prefooter', array(
                'editor_script' => 'prefooter',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'footer', \get_template_directory_uri() . '/dist/blocks/footer.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/footer', array(
                'editor_script' => 'footer',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );

            #block script
            \wp_register_script( 'phonelink', \get_template_directory_uri() . '/dist/blocks/phonelink.js', array( 'wp-blocks', 'wp-editor', 'wp-components'));
            \register_block_type( 'themeblockhead/phonelink', array(
                'editor_script' => 'phonelink',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'phonelist', \get_template_directory_uri() . '/dist/blocks/phonelist.js', array( 'wp-blocks' ));
            \register_block_type( 'themeblockhead/phonelist', array(
                'editor_script' => 'phonelist',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'sociallist', \get_template_directory_uri() . '/dist/blocks/sociallist.js', array( 'wp-blocks' ));
            \register_block_type( 'themeblockhead/sociallist', array(
                'editor_script' => 'sociallist',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );
            #block script
            \wp_register_script( 'newsletter', \get_template_directory_uri() . '/dist/blocks/newsletter.js', array( 'wp-blocks' ));
            \register_block_type( 'themeblockhead/newsletter', array(
                'editor_script' => 'newsletter',
                'editor_style'  => 'theme_blocks_editor_css',
                'style'         => 'theme_blocks_global_css'
                    
            ) );

        }

        
        public static function svg_support($filetypes){
            return array_merge($filetypes, [
                'svg' => 'image/svg+xml'
                ] );
        }



        /* BLOCKS */

    }
}
Theme::get_instance();