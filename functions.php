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

        }
        public static function register_theme_blocktype( $categories ){
            return array_merge(
                $categories, array( array('slug'=>'kitelytech', 'title'=>'KitelyTech Blocks'))
            );
        }

        public static function theme_blocks(){
            #version is either a random cachebuster or the current version depending on theme mode
            $v = self::mode == "development" ? (string) bin2hex(random_bytes(2)) : self::version;

            #shared js/css
            \wp_register_style( 'theme_blocks_global_css', \get_template_directory_uri() . '/dist/style.css', array(), $v, 'all' );
            \wp_register_script ( 'theme_blocks_global_js', \get_template_directory_uri() . '/dist/app.js', array('wp-blocks', 'wp-editor', 'wp-components'), $v, false );
            
            #block script
            \wp_register_script( 'headerlogo', \get_template_directory_uri() . '/dist/blocks/headerlogo.js', array( 'wp-blocks', 'wp-editor'));
            \register_block_type( 'themeblockhead/headerlogo', array(
                'editor_script' => 'headerlogo',
                'editor_style'  => 'theme_blocks_global_css',
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