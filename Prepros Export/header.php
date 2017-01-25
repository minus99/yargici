<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta id="myViewport" name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=no">
    <title><?= isset($PageTitle) ? $PageTitle : "Default Title"?></title>
    <link rel="shortcut icon" href="/lab/projects/yargici/images/frontend/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/lab/projects/yargici/images/frontend/favicon.ico" type="image/x-icon" />

    <!-- css import file -->
    <link type="text/css" rel="stylesheet" href="/lab/projects/yargici/styles/style.css" />
    <!-- css import file -->
    
    <!-- Additional tags here -->
    <?php if (function_exists('customPageHeader')){
      customPageHeader();
    }?>

  </head>
  <body>
  <div class="site-wrapper">
    <header class="site-header ems-width-full">
      <div class="site-header-wrapper">
          <div class="ems-container site-header-inner clearfix">
              <!--Mobile Header-->
              <div class="ems-smart-header"></div>
              <!--Mobile Header-->
              <div class="ems-col ems-col-1">
                  <!--Mini Search-->
                      <div class="mod-mini-search">
                        <div class="mod-mini-search-inner">
                            <div class="mod-mini-search-header">
                                <span></span>
                            </div>
                            <div class="mod-mini-search-body">
                                <div class="ems-form">
                                    <div class="ems-form-inner">
                                        <div class="ems-field text"><span><i></i></span></div>
                                        <div class="ems-field">
                                            <div class="ui-widget">
                                                <input id="tags" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mod-mini-search-footer">
                                <span></span>
                            </div>
                        </div>
                    </div>
                  <!--Mini Search-->
              </div>
              <div class="ems-col ems-col-2">
                <div class="logo"><a href="/"><img src="/images/frontend/svg/logo.svg"></a></div>
              </div>
              <div class="ems-col ems-col-3"></div>
          </div>
      </div>
  </header>