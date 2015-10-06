if(RB==null){ var RB = {}; }

if (RB.constants == null) {
  RB.buildImageTag = function(name) {
    return "<img src='/images/?1437165198"+ name + "'/>";
  };

  RB.constants = {
    protect_against_forgery: true,
    request_forgery_protection_token: 'authenticity_token',
    form_authenticity_token: 'IjgAk+sryuS7AAkPn7/ITUV652f6cwFBHN6GNTvW7o8=',
    
    autorefresh_wait: 1000
  };

  RB.routes = {
    create_sprint: '/rb/sprint/create',
    update_sprint: '/rb/sprint/:id/update',

    create_story: '/rb/story/create',
    update_story: '/rb/story/update/:id',

    create_task: '/rb/task',
    update_task: '/rb/task/:id',

    create_impediment: '/rb/impediment/create',
    update_impediment: '/rb/impediment/update/:id',

    show_updated_items: '/rb/updated_items/:id',
    show_burndown_chart: '/rb/burndown/:id',
    show_burndown_embedded: '/rb/burndown/:id/embed'
  };

  RB.urlFor = function(route_name, options) {
    route = RB.routes[route_name];
    if(options != null && options['id'] != null){
      route = route.replace(":id", options['id']);
    }
    return route;
  };
}






