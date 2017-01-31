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
                                                <div class="ems-field">
                                                    <div class="ui-widget">
                                                        <input id="tags" type="text">
                                                    </div>
                                                    <a href="javascript:void(0);" class="ui-widget-search"><i class="icon-ico_search"></i></a>
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
                                        <span><div class="lng">TR</div></span>
                                        <ul>
                                            <li><a href="javascript:void(0);"><span>R</span></a></li>
                                            <li><a href="javascript:void(0);"> <span>EN</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="lng-wrp lng-rate" id="customerCurrency">
                                    <div class="dropdown">
                                        <span><div class="lng">TRY</div><i class="icon-ico_arw-empty-bttm"> </i></span>
                                        <ul>
                                            <li><a href="javascript:void(0);"><span>TRY</span></a></li>
                                            <li><a href="javascript:void(0);"> <span>EUR</span></a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        <!--Languages and Rate-->

                        <!--Favorites Link-->
                        <div class="mod-mini-fav">
                            <a href="javascrip:void(0);"><i class="icon-ico_hearth"></i></a>
                        </div>
                        <!--Favorites Link-->

                        <!--Mini Login-->
                        <div class="mod-mini-login">
                            <div class="mod-mini-login-inner">
                                <div class="mod-mini-login-header">
                                    <!--Giriş yapıldıktan sonraki link-->
                                    <a  class="btn-signin" href="javascrip:void(0);"><span class="member-account">Hesabım</span><i class="icon-ico_mini-member"></i></a>
                                    <!--Giriş yapıldıktan sonraki link-->

                                    <!--Giriş yapılmadan önceki link-->
                                    <a class="btn-member" href="javascrip:void(0);"><span class="member-account">Üyelik</span><i class="icon-ico_mini-member"></i></a>
                                    <!--Giriş yapılmadan önceki link-->
                                </div>
                                <div class="mod-mini-login-body">
                                    <div class="sub logoff">
                                        <div class="ems-form">
                                            <!--Hatalı Giriş Kontrolü-->
                                                <div class="ems-message ems-message-error"><span>Hatalı giriş yaptınız!</span></div>
                                            <!--Hatalı Giriş Kontrolü-->
                                            <div class="ems-form-inner">
                                                <div class="ems-field text">
                                                    <div class="ems-form-label"><span>E-Mail</span></div>
                                                    <div class="ems-form-obj"><input type="text"></div>
                                                </div>
                                                <div class="ems-field text">
                                                    <div class="ems-form-label"><span>Şifre</span></div>
                                                    <div class="ems-form-obj"><input type="text"></div>
                                                </div>
                                                <div class="ems-field ems-field-right">
                                                    <div class="ems-form-label"><span>Şifremi unuttum!</span></div>
                                                    <div class="ems-form-obj"><input type="text"></div>
                                                </div>
                                                <div class="ems-field submit">
                                                    <div class="ems-col"><a href="javascrip:void(0);" class="btn-default btn-enter"><span>Giriş</span></a></div>
                                                    <div class="ems-col"><a href="javascrip:void(0);" class="btn-default btn-fb"><span>Facebook ile giriş</span></a></div>
                                                    <div class="ems-col"><a href="javascrip:void(0);" class="btn-default btn-google"><span>Google ile giriş</span></a></div>
                                                    <div class="ems-col"><a href="javascrip:void(0);" class="btn-default btn-exit"><span>Üye ol</span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub login">
                                        <div class="ems-user-info">
                                            <span class="name-surname">Test Account</span>
                                        </div>
                                        <div class="ems-user-pages">
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Üyelik Bilgilerim</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Adres Bilgilerim</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Siparişlerim</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Favorilerim</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Hediye Çeklerim</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Mesajlarım</span></a></div>
                                            <div class="ems-col"><a href="javascript:void(0);" class="link-btn"><span>Çıkış Yap</span></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mod-mini-login-footer">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <!--Mini Login-->

                        <!-- Mini Cart -->
                        <div class="mod-mini-cart">
                            <div class="mod-mini-cart-inner">
                                <div class="mod-mini-cart-header">
                                    <div class="ems-cart-info">
                                        <div class="ems-cart-basket"><span></span><i class="icon-ico_mini-cart"></i></div>
                                        <div class="ems-cart-piece"><span class="prd-piece">1</span></div>
                                    </div>
                                </div>
                                <div class="mod-mini-cart-body">
                                    <div class="mod-mini-cart-body-wrp">
                                        <div class="mini-cart-empty"><span>SEPETİNİZ BOŞ</span></div>
                                        <div class="mini-cat-row">
                                            <div class="cart-prd-left"><div class="cart-prd-image"><img src="" border="0"></div></div>
                                            <div class="cart-prd-right">
                                                <div class="cart-prd-remove"><a href="javascript:void(0);"><i class="icon-ico_remove"> </i></a></div>
                                                <div class="cart-prd-name"><span>YAKA DETAYLI KOLSUZ BLUZ</span></div>
                                                <div class="ems-col ems-col-1">
                                                    <div class="cart-prd-quantity"><a href="javascript:void(0);" class="minus"><i class="icon-ico_minus"></i></a><span>1 AD</span><a href="javascript:void(0);" class="plus"><i class="icon-ico_plus"></i></a>
                                                    </div>
                                                </div>
                                                <div class="ems-col ems-col-2">
                                                    <span class="prd-price-wrap">
                                                        <span class="total">149</span>
                                                        <span class="penny">,00</span>
                                                        <span class="currency">TL</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mod-mini-cart-footer">
                                    <div class="mod-mini-cart-footer-inner">
                                        <div class="ems-col ems-col-1">
                                            <span class="total-text">TOPLAM</span>
                                            <span class="prd-price-wrap">
                                                <span class="total">149</span>
                                                <span class="penny">,00</span>
                                                <span class="currency">TL</span>
                                            </span>
                                        </div>
                                        <div class="ems-col ems-col-2">
                                            <a href="javascript:void(0);" class="btn-default btn-default-cart"><span>SATIN AL</span></a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <!-- Mini Cart -->
                    </div>
              </div>
            <!--Row-->

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
            <!--Row-->
          </div>
      </div>
  </header>