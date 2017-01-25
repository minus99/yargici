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
              <!--Row-->
              <div class="ems-row ems-row-1">
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
                        <div class="logo"><a href="/"><img src="/lab/projects/yargici/images/frontend/header-logo.svg"></a></div>
                    </div>
                    <div class="ems-col ems-col-3">
                        <!--Languages and Rate-->
                        <div class="lng">
                                <div class="lng-wrp" id="languagelist">
                                    <div class="dropdown">
                                        <span><div class="lng">TR</div><i class="icon-ico_bottom"> </i></span>
                                        <ul>
                                            <li><a href="javascript:void(0);"><span>R</span></a></li>
                                            <li><a href="javascript:void(0);"> <span>EN</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="lng-wrp lng-rate" id="customerCurrency">
                                    <div class="dropdown">
                                        <span><div class="lng">TRY</div><i class="icon-ico_bottom"> </i></span>
                                        <ul>
                                            <li><a href="javascript:void(0);"><span>TRY</span></a></li>
                                            <li><a href="javascript:void(0);"> <span>EUR</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <!--Languages and Rate-->
                    </div>
              </div>
            <!--Row-->
            <div class="ems-row ems-row-2">
                <nav class="nav-main">
                    <div class="cat-menu-holder">
                        <ul>
                            <li><a href="javascript:void(0);">YENİ YIL HEDİYELERİ</a></li>
                            <li><a href="javascript:void(0);">GİYİM</a></li>
                            <li><a href="javascript:void(0);">AYAKKABI</a></li>
                            <li><a href="javascript:void(0);">AKSESUAR</a></li>
                            <li><a href="javascript:void(0);">HOMEWORKS</a></li>
                            <li><a href="javascript:void(0);">EV GİYİM</a></li>
                            <li><a href="javascript:void(0);">İNDİRİM</a></li>
                            <li><a href="javascript:void(0);">GIFT CARD</a></li>
                            <li><a href="javascript:void(0);">BLOG</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
          </div>
      </div>
  </header>