jQuery(document).ready(function($){
  console.log('base loaded')

  jQuery('.loading-spinner').removeClass('active')

  let offcanvas_menu = jQuery('#off-canvas-link-list')
  let menu_items = [
    {
      label: 'Me',
      link: '/#'
    },
    {
      label: 'My Church',
      link: '/#'
    },
    {
      label: 'My People',
      link: '/#'
    }
  ]
  jQuery.each( menu_items, function(i,v){
    offcanvas_menu.append(`<div class="cell offcanvas-link" data-link="${v.link}">${v.label}</div>`)
  })

})
