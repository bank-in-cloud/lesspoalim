/**
 * Created by leonid.raizmen on 23/12/2014.
 */
module.exports =  {
    dependencies: [
        {file: './public/lib/bootstrap/dist/css/bootstrap.css'}
    ],

    generated_src: [
        {dir: './public/generated_css/*.css'}
    ],

    src: [
        { dir: './public/css/*.css' },
        { dir: './public/generated_css/*.css' }
    ]


}