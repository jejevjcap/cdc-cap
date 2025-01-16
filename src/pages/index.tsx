export default function Home() {
    return (
        <>
            <div className="app align-content-stretch d-flex flex-wrap">
                <div className="app-sidebar">
                    <div className="logo">
                        <a href="index.html" className="logo-icon">
                            <span className="logo-text">Neptune</span>
                        </a>
                        <div className="sidebar-user-switcher user-activity-online">
                            <a href="#">
                                <img src="../../assets/images/avatars/avatar.png" />
                                <span className="activity-indicator" />
                                <span className="user-info-text">
                                    Chloe
                                    <br />
                                    <span className="user-state-info">On a call</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="app-menu">
                        <ul className="accordion-menu">
                            <li className="sidebar-title">Apps</li>
                            <li className="active-page">
                                <a href="index.html" className="active">
                                    <i className="material-icons-two-tone">dashboard</i>Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <i className="material-icons-two-tone">inbox</i>Mailbox
                                    <span className="badge rounded-pill badge-danger float-end">
                                        87
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="file-manager.html">
                                    <i className="material-icons-two-tone">cloud_queue</i>File Manager
                                </a>
                            </li>
                            <li>
                                <a href="calendar.html">
                                    <i className="material-icons-two-tone">calendar_today</i>Calendar
                                    <span className="badge rounded-pill badge-success float-end">
                                        14
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="todo.html">
                                    <i className="material-icons-two-tone">done</i>Todo
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="material-icons-two-tone">star</i>Pages
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="invoice.html">Invoice</a>
                                    </li>
                                    <li>
                                        <a href="settings.html">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Authentication
                                            <i className="material-icons has-sub-menu">
                                                keyboard_arrow_right
                                            </i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="sign-in.html">Sign In</a>
                                            </li>
                                            <li>
                                                <a href="sign-up.html">Sign Up</a>
                                            </li>
                                            <li>
                                                <a href="lock-screen.html">Lock Screen</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="error.html">Error</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">UI Elements</li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">color_lens</i>Styles
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="styles-typography.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="styles-code.html">Code</a>
                                    </li>
                                    <li>
                                        <a href="styles-icons.html">Icons</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">grid_on</i>Tables
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="tables-basic.html">Basic</a>
                                    </li>
                                    <li>
                                        <a href="tables-datatable.html">DataTable</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">
                                    <i className="material-icons-two-tone">sentiment_satisfied_alt</i>
                                    Elements
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="ui-alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="ui-avatars.html">Avatars</a>
                                    </li>
                                    <li>
                                        <a href="ui-badge.html">Badge</a>
                                    </li>
                                    <li>
                                        <a href="ui-breadcrumbs.html">Breadcrumbs</a>
                                    </li>
                                    <li>
                                        <a href="ui-buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="ui-button-groups.html">Button Groups</a>
                                    </li>
                                    <li>
                                        <a href="ui-collapse.html">Collapse</a>
                                    </li>
                                    <li>
                                        <a href="ui-dropdown.html">Dropdown</a>
                                    </li>
                                    <li>
                                        <a href="ui-images.html">Images</a>
                                    </li>
                                    <li>
                                        <a href="ui-pagination.html">Pagination</a>
                                    </li>
                                    <li>
                                        <a href="ui-popovers.html">Popovers</a>
                                    </li>
                                    <li>
                                        <a href="ui-progress.html">Progress</a>
                                    </li>
                                    <li>
                                        <a href="ui-spinners.html">Spinners</a>
                                    </li>
                                    <li>
                                        <a href="ui-toast.html">Toast</a>
                                    </li>
                                    <li>
                                        <a href="ui-tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">card_giftcard</i>Components
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="components-accordions.html">Accordions</a>
                                    </li>
                                    <li>
                                        <a href="components-block-ui.html">Block UI</a>
                                    </li>
                                    <li>
                                        <a href="components-cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="components-carousel.html">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="components-countdown.html">Countdown</a>
                                    </li>
                                    <li>
                                        <a href="components-lightbox.html">Lightbox</a>
                                    </li>
                                    <li>
                                        <a href="components-lists.html">Lists</a>
                                    </li>
                                    <li>
                                        <a href="components-modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="components-tabs.html">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="components-session-timeout.html">Session Timeout</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="widgets.html">
                                    <i className="material-icons-two-tone">widgets</i>Widgets
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">edit</i>Forms
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="forms-basic.html">Basic</a>
                                    </li>
                                    <li>
                                        <a href="forms-input-groups.html">Input Groups</a>
                                    </li>
                                    <li>
                                        <a href="forms-input-masks.html">Input Masks</a>
                                    </li>
                                    <li>
                                        <a href="forms-layouts.html">Form Layouts</a>
                                    </li>
                                    <li>
                                        <a href="forms-validation.html">Form Validation</a>
                                    </li>
                                    <li>
                                        <a href="forms-file-upload.html">File Upload</a>
                                    </li>
                                    <li>
                                        <a href="forms-text-editor.html">Text Editor</a>
                                    </li>
                                    <li>
                                        <a href="forms-datepickers.html">Datepickers</a>
                                    </li>
                                    <li>
                                        <a href="forms-select2.html">Select2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">analytics</i>Charts
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="charts-apex.html">Apex</a>
                                    </li>
                                    <li>
                                        <a href="charts-chartjs.html">ChartJS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Layout</li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">view_agenda</i>Content
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="content-page-headings.html">Page Headings</a>
                                    </li>
                                    <li>
                                        <a href="content-section-headings.html">Section Headings</a>
                                    </li>
                                    <li>
                                        <a href="content-left-menu.html">Left Menu</a>
                                    </li>
                                    <li>
                                        <a href="content-right-menu.html">Right Menu</a>
                                    </li>
                                    <li>
                                        <a href="content-boxed-content.html">Boxed Content</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">menu</i>Menu
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="menu-off-canvas.html">Off-Canvas</a>
                                    </li>
                                    <li>
                                        <a href="menu-standard.html">Standard</a>
                                    </li>
                                    <li>
                                        <a href="menu-dark-sidebar.html">Dark Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="menu-hover-menu.html">Hover Menu</a>
                                    </li>
                                    <li>
                                        <a href="menu-colored-sidebar.html">Colored Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">view_day</i>Header
                                    <i className="material-icons has-sub-menu">
                                        keyboard_arrow_right
                                    </i>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="header-basic.html">Basic</a>
                                    </li>
                                    <li>
                                        <a href="header-full-width.html">Full-width</a>
                                    </li>
                                    <li>
                                        <a href="header-transparent.html">Transparent</a>
                                    </li>
                                    <li>
                                        <a href="header-large.html">Large</a>
                                    </li>
                                    <li>
                                        <a href="header-colorful.html">Colorful</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-title">Other</li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">bookmark</i>Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="material-icons-two-tone">access_time</i>Change Log
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-container">
                    <div className="search">
                        <form>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type here..."
                                aria-label="Search"
                            />
                        </form>
                        <a href="#" className="toggle-search">
                            <i className="material-icons">close</i>
                        </a>
                    </div>
                    <div className="app-header">
                        <nav className="navbar navbar-light navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="navbar-nav" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link hide-sidebar-toggle-button" href="#">
                                                <i className="material-icons">first_page</i>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown hidden-on-mobile">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="addDropdownLink"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="material-icons">add</i>
                                            </a>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="addDropdownLink"
                                            >
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        New Workspace
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        New Board
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Create Project
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown hidden-on-mobile">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="exploreDropdownLink"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="material-icons-outlined">explore</i>
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-lg large-items-menu"
                                                aria-labelledby="exploreDropdownLink"
                                            >
                                                <li>
                                                    <h6 className="dropdown-header">Repositories</h6>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <h5 className="dropdown-item-title">
                                                            Neptune iOS
                                                            <span className="badge badge-warning">1.0.2</span>
                                                            <span className="hidden-helper-text">
                                                                switch
                                                                <i className="material-icons">
                                                                    keyboard_arrow_right
                                                                </i>
                                                            </span>
                                                        </h5>
                                                        <span className="dropdown-item-description">
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <h5 className="dropdown-item-title">
                                                            Neptune Android
                                                            <span className="badge badge-info">dev</span>
                                                            <span className="hidden-helper-text">
                                                                switch
                                                                <i className="material-icons">
                                                                    keyboard_arrow_right
                                                                </i>
                                                            </span>
                                                        </h5>
                                                        <span className="dropdown-item-description">
                                                            Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-btn-item d-grid">
                                                    <button className="btn btn-primary">
                                                        Create new repository
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex">
                                    <ul className="navbar-nav">
                                        <li className="nav-item hidden-on-mobile">
                                            <a className="nav-link active" href="#">
                                                Applications
                                            </a>
                                        </li>
                                        <li className="nav-item hidden-on-mobile">
                                            <a className="nav-link" href="#">
                                                Reports
                                            </a>
                                        </li>
                                        <li className="nav-item hidden-on-mobile">
                                            <a className="nav-link" href="#">
                                                Projects
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link toggle-search" href="#">
                                                <i className="material-icons">search</i>
                                            </a>
                                        </li>
                                        <li className="nav-item hidden-on-mobile">
                                            <a
                                                className="nav-link language-dropdown-toggle"
                                                href="#"
                                                id="languageDropDown"
                                                data-bs-toggle="dropdown"
                                            >
                                                <img src="../../assets/images/flags/us.png" alt="" />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end language-dropdown"
                                                aria-labelledby="languageDropDown"
                                            >
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <img
                                                            src="../../assets/images/flags/germany.png"
                                                            alt=""
                                                        />
                                                        German
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <img src="../../assets/images/flags/italy.png" alt="" />
                                                        Italian
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <img src="../../assets/images/flags/china.png" alt="" />
                                                        Chinese
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item hidden-on-mobile">
                                            <a
                                                className="nav-link nav-notifications-toggle"
                                                id="notificationsDropDown"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                4
                                            </a>
                                            <div
                                                className="dropdown-menu dropdown-menu-end notifications-dropdown"
                                                aria-labelledby="notificationsDropDown"
                                            >
                                                <h6 className="dropdown-header">Notifications</h6>
                                                <div className="notifications-dropdown-list">
                                                    <a href="#">
                                                        <div className="notifications-dropdown-item">
                                                            <div className="notifications-dropdown-item-image">
                                                                <span className="notifications-badge bg-info text-white">
                                                                    <i className="material-icons-outlined">
                                                                        campaign
                                                                    </i>
                                                                </span>
                                                            </div>
                                                            <div className="notifications-dropdown-item-text">
                                                                <p className="bold-notifications-text">
                                                                    Donec tempus nisi sed erat vestibulum, eu suscipit
                                                                    ex laoreet
                                                                </p>
                                                                <small>19:00</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notifications-dropdown-item">
                                                            <div className="notifications-dropdown-item-image">
                                                                <span className="notifications-badge bg-danger text-white">
                                                                    <i className="material-icons-outlined">bolt</i>
                                                                </span>
                                                            </div>
                                                            <div className="notifications-dropdown-item-text">
                                                                <p className="bold-notifications-text">
                                                                    Quisque ligula dui, tincidunt nec pharetra eu,
                                                                    fringilla quis mauris
                                                                </p>
                                                                <small>18:00</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notifications-dropdown-item">
                                                            <div className="notifications-dropdown-item-image">
                                                                <span className="notifications-badge bg-success text-white">
                                                                    <i className="material-icons-outlined">
                                                                        alternate_email
                                                                    </i>
                                                                </span>
                                                            </div>
                                                            <div className="notifications-dropdown-item-text">
                                                                <p>
                                                                    Nulla id libero mattis justo euismod congue in et
                                                                    metus
                                                                </p>
                                                                <small>yesterday</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notifications-dropdown-item">
                                                            <div className="notifications-dropdown-item-image">
                                                                <span className="notifications-badge">
                                                                    <img
                                                                        src="../../assets/images/avatars/avatar.png"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="notifications-dropdown-item-text">
                                                                <p>
                                                                    Praesent sodales lobortis velit ac pellentesque
                                                                </p>
                                                                <small>yesterday</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notifications-dropdown-item">
                                                            <div className="notifications-dropdown-item-image">
                                                                <span className="notifications-badge">
                                                                    <img
                                                                        src="../../assets/images/avatars/avatar.png"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="notifications-dropdown-item-text">
                                                                <p>
                                                                    Praesent lacinia ante eget tristique mattis. Nam
                                                                    sollicitudin velit sit amet auctor porta
                                                                </p>
                                                                <small>yesterday</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="app-content">
                        <div className="content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="page-description">
                                            <h1>Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-primary">
                                                        <i className="material-icons-outlined">paid</i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">
                                                            Today's Sales
                                                        </span>
                                                        <span className="widget-stats-amount">$38,211</span>
                                                        <span className="widget-stats-info">
                                                            471 Orders Total
                                                        </span>
                                                    </div>
                                                    <div className="widget-stats-indicator widget-stats-indicator-negative align-self-start">
                                                        <i className="material-icons">keyboard_arrow_down</i> 4%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-warning">
                                                        <i className="material-icons-outlined">person</i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">Active Users</span>
                                                        <span className="widget-stats-amount">23,491</span>
                                                        <span className="widget-stats-info">
                                                            790 unique this month
                                                        </span>
                                                    </div>
                                                    <div className="widget-stats-indicator widget-stats-indicator-positive align-self-start">
                                                        <i className="material-icons">keyboard_arrow_up</i> 12%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-danger">
                                                        <i className="material-icons-outlined">file_download</i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">Downloads</span>
                                                        <span className="widget-stats-amount">140,390</span>
                                                        <span className="widget-stats-info">
                                                            87 items downloaded
                                                        </span>
                                                    </div>
                                                    <div className="widget-stats-indicator widget-stats-indicator-positive align-self-start">
                                                        <i className="material-icons">keyboard_arrow_up</i> 7%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card widget widget-list">
                                            <div className="card-header">
                                                <h5 className="card-title">
                                                    Active Tasks
                                                    <span className="badge badge-success badge-style-light">
                                                        14 completed
                                                    </span>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <span className="text-muted m-b-xs d-block">
                                                    showing 5 out of 23 active tasks.
                                                </span>
                                                <ul className="widget-list-content list-unstyled">
                                                    <li className="widget-list-item widget-list-item-green">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">article</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Dashboard UI optimisations
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-blue">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">
                                                                verified_user
                                                            </i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Mailbox cleanup
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Woodrow Hawkins
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-purple">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">watch_later</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Header scroll bugfix
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Sky Meyers
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-yellow">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">extension</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Localization for file manager
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-red">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">
                                                                invert_colors
                                                            </i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                New E-commerce UX/UI design
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-list">
                                            <div className="card-header">
                                                <h5 className="card-title">
                                                    Todo
                                                    <span className="badge badge-success badge-style-light">
                                                        14 completed
                                                    </span>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <span className="text-muted m-b-xs d-block">
                                                    showing 5 out of 23 active tasks.
                                                </span>
                                                <ul className="widget-list-content list-unstyled">
                                                    <li className="widget-list-item widget-list-item-green">
                                                        <span className="widget-list-item-check">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Dashboard UI optimisations
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-blue">
                                                        <span className="widget-list-item-check">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    defaultChecked=""
                                                                />
                                                            </div>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Mailbox cleanup
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Woodrow Hawkins
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-purple">
                                                        <span className="widget-list-item-check">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    defaultChecked=""
                                                                />
                                                            </div>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Header scroll bugfix
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Sky Meyers
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-yellow">
                                                        <span className="widget-list-item-check">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Localization for file manager
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-red">
                                                        <span className="widget-list-item-check">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    defaultChecked=""
                                                                />
                                                            </div>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                New E-commerce UX/UI design
                                                            </a>
                                                            <span className="widget-list-item-description-subtitle">
                                                                Oskar Hudson
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-payment-request">
                                            <div className="card-header">
                                                <h5 className="card-title">
                                                    Payment Request
                                                    <span className="badge badge-warning badge-style-light">
                                                        8 June
                                                    </span>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="widget-payment-request-container">
                                                    <div className="widget-payment-request-author">
                                                        <div className="avatar m-r-sm">
                                                            <img
                                                                src="../../assets/images/avatars/avatar.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="widget-payment-request-author-info">
                                                            <span className="widget-payment-request-author-name">
                                                                Caio Yousuke
                                                            </span>
                                                            <span className="widget-payment-request-author-about">
                                                                Customer Journey Expert
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="widget-payment-request-product">
                                                        <div className="widget-payment-request-product-image m-r-sm">
                                                            <img
                                                                src="../../assets/images/other/facebook_logo.png"
                                                                className="mt-auto"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="widget-payment-request-product-info d-flex">
                                                            <div className="widget-payment-request-product-info-content">
                                                                <span className="widget-payment-request-product-name">
                                                                    Google
                                                                </span>
                                                                <span className="widget-payment-request-product-about">
                                                                    Youtube Advertisments
                                                                </span>
                                                            </div>
                                                            <span className="widget-payment-request-product-price">
                                                                $2,399.99
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="widget-payment-request-info m-t-md">
                                                        <div className="widget-payment-request-info-item">
                                                            <span className="widget-payment-request-info-title d-block">
                                                                Description
                                                            </span>
                                                            <span className="text-muted d-block">
                                                                Advertisement for envato items
                                                            </span>
                                                        </div>
                                                        <div className="widget-payment-request-info-item">
                                                            <span className="widget-payment-request-info-title d-block">
                                                                Due Date
                                                            </span>
                                                            <span className="text-muted d-block">
                                                                14 June, 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="widget-payment-request-actions m-t-lg d-flex">
                                                        <a
                                                            href="#"
                                                            className="btn btn-light flex-grow-1 m-r-xxs"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn btn-primary flex-grow-1 m-l-xxs"
                                                        >
                                                            Approve
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card widget widget-list">
                                            <div className="card-header">
                                                <h5 className="card-title">
                                                    In Progress Tasks
                                                    <span className="badge badge-success badge-style-light">
                                                        37% total
                                                    </span>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <span className="text-muted m-b-xs d-block">
                                                    showing 5 out of 9 in progress tasks.
                                                </span>
                                                <ul className="widget-list-content list-unstyled">
                                                    <li className="widget-list-item widget-list-item-green">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">article</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Dashboard UI optimisations
                                                            </a>
                                                            <span className="widget-list-item-description-progress">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "45%" }}
                                                                        aria-valuenow={45}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-blue">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">
                                                                verified_user
                                                            </i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Mailbox cleanup
                                                            </a>
                                                            <span className="widget-list-item-description-progress">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "57%" }}
                                                                        aria-valuenow={57}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-purple">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">watch_later</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Header scroll bugfix
                                                            </a>
                                                            <span className="widget-list-item-description-progress">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "14%" }}
                                                                        aria-valuenow={14}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-yellow">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">extension</i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                Localization for file manager
                                                            </a>
                                                            <span className="widget-list-item-description-progress">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "79%" }}
                                                                        aria-valuenow={79}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li className="widget-list-item widget-list-item-red">
                                                        <span className="widget-list-item-icon">
                                                            <i className="material-icons-outlined">
                                                                invert_colors
                                                            </i>
                                                        </span>
                                                        <span className="widget-list-item-description">
                                                            <a
                                                                href="#"
                                                                className="widget-list-item-description-title"
                                                            >
                                                                New E-commerce UX/UI design
                                                            </a>
                                                            <span className="widget-list-item-description-progress">
                                                                <div className="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "25%" }}
                                                                        aria-valuenow={25}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-popular-product">
                                            <div className="card-body">
                                                <div className="widget-popular-product-container">
                                                    <div className="widget-popular-product-image">
                                                        <img
                                                            src="../../assets/images/widgets/popular-product.jpeg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-popular-product-tags">
                                                        <span className="badge rounded-pill badge-secondary badge-style-light">
                                                            Science
                                                        </span>
                                                        <span className="badge rounded-pill badge-success badge-style-light">
                                                            Lifestyle
                                                        </span>
                                                        <span className="badge rounded-pill badge-danger badge-style-light">
                                                            People
                                                        </span>
                                                    </div>
                                                    <div className="widget-popular-product-content">
                                                        <a href="#" className="widget-popular-product-title">
                                                            Banana Donut
                                                        </a>
                                                        <p className="widget-popular-product-text m-b-md">
                                                            Quisque congue risus sit amet pellentesque fermentum.
                                                            Etiam nibh erat, convallis ac dui nec, imperdiet
                                                            dignissim nulla. Ut tincidunt tellus sit amet elit
                                                            viverra porttitor. Mauris at tellus a nisl accumsan
                                                            egestas suscipit..
                                                        </p>
                                                        <span className="widget-popular-product-rating">
                                                            <i className="material-icons">star</i>
                                                            <i className="material-icons">star</i>
                                                            <i className="material-icons">star</i>
                                                            <i className="material-icons">star</i>
                                                            <i className="material-icons">star_half</i>
                                                            <span className="widget-popular-product-rating-num">
                                                                4.4
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div
                                            className="card widget widget-bank-card"
                                            style={{ height: 220 }}
                                        >
                                            <div className="card-body">
                                                <div className="widget-bank-card-container widget-bank-card-visa d-flex flex-column">
                                                    <div className="widget-bank-card-logo" />
                                                    <span className="widget-bank-card-balance-title">
                                                        BALANCE
                                                    </span>
                                                    <span className="widget-bank-card-balance">$5,688</span>
                                                    <span className="widget-bank-card-number mt-auto">
                                                        **** **** **** 4408
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="card widget widget-bank-card"
                                            style={{ height: 220 }}
                                        >
                                            <div className="card-body">
                                                <div className="widget-bank-card-container widget-bank-card-mastercard d-flex flex-column">
                                                    <div className="widget-bank-card-logo" />
                                                    <span className="widget-bank-card-balance-title">
                                                        BALANCE
                                                    </span>
                                                    <span className="widget-bank-card-balance">$12,079</span>
                                                    <span className="widget-bank-card-number mt-auto">
                                                        **** **** **** 0999
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="card widget widget-stats-large">
                                            <div className="row">
                                                <div className="col-xl-8">
                                                    <div className="widget-stats-large-chart-container">
                                                        <div className="card-header">
                                                            <h5 className="card-title">
                                                                Earnings
                                                                <span className="badge badge-light badge-style-light">
                                                                    Last Year
                                                                </span>
                                                            </h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <div id="apex-earnings" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="widget-stats-large-info-container">
                                                        <div className="card-header">
                                                            <h5 className="card-title">
                                                                Report
                                                                <span className="badge badge-info badge-style-light">
                                                                    Updated 5 min ago
                                                                </span>
                                                            </h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-description">
                                                                Duis fringilla eget velit sit amet lobortis. Donec
                                                                rutrum, arcu auctor varius cursus. mi nulla dapibus
                                                                justo, at volutpat libero
                                                            </p>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">
                                                                    Neptune - v1.0
                                                                    <span className="float-end text-success">
                                                                        14%
                                                                        <i className="material-icons align-middle">
                                                                            keyboard_arrow_up
                                                                        </i>
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Space - v1.2
                                                                    <span className="float-end text-danger">
                                                                        7%
                                                                        <i className="material-icons align-middle">
                                                                            keyboard_arrow_down
                                                                        </i>
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Lime - v1.0.3
                                                                    <span className="float-end text-success">
                                                                        21%
                                                                        <i className="material-icons align-middle">
                                                                            keyboard_arrow_up
                                                                        </i>
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Circl - v2.3
                                                                    <span className="float-end text-success">
                                                                        17%
                                                                        <i className="material-icons align-middle">
                                                                            keyboard_arrow_up
                                                                        </i>
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Connect - v1.7
                                                                    <span className="float-end text-danger">
                                                                        3%
                                                                        <i className="material-icons align-middle">
                                                                            keyboard_arrow_down
                                                                        </i>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card">
                                            <img
                                                src="../../assets/images/widgets/blog5.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    The M1 Macbook Pro is Blazing Fast
                                                </h5>
                                                <p className="card-text">
                                                    Pellentesque habitant morbi tristique senectus et.
                                                    Curabitur molestie in tellus sed porttitor. Etiam eget
                                                    erat erat. Nullam auctor a justo lacinia varius.
                                                </p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Small chip. Giant leap.</li>
                                                <li className="list-group-item">
                                                    Creates beauty like a beast.
                                                </li>
                                                <li className="list-group-item">
                                                    Make connections. Faster than ever.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-warning">
                                                        <i className="material-icons-outlined">task_alt</i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">
                                                            Tasks Completed
                                                        </span>
                                                        <span className="widget-stats-amount">1,871</span>
                                                    </div>
                                                    <div className="widget-stats-indicator align-self-start">
                                                        <i className="material-icons">keyboard_arrow_down</i>{" "}
                                                        18%
                                                    </div>
                                                </div>
                                                <div className="widget-stats-chart">
                                                    <div id="widget-stats-chart1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-danger">
                                                        <i className="material-icons-outlined">
                                                            star_border_purple500
                                                        </i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">Engagement</span>
                                                        <span className="widget-stats-amount">45,661</span>
                                                    </div>
                                                    <div className="widget-stats-indicator align-self-start">
                                                        <i className="material-icons">keyboard_arrow_up</i> 25%
                                                    </div>
                                                </div>
                                                <div className="widget-stats-chart">
                                                    <div id="widget-stats-chart2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card widget widget-stats">
                                            <div className="card-body">
                                                <div className="widget-stats-container d-flex">
                                                    <div className="widget-stats-icon widget-stats-icon-primary">
                                                        <i className="material-icons-outlined">
                                                            account_balance_wallet
                                                        </i>
                                                    </div>
                                                    <div className="widget-stats-content flex-fill">
                                                        <span className="widget-stats-title">Balance</span>
                                                        <span className="widget-stats-amount">$218,655</span>
                                                    </div>
                                                    <div className="widget-stats-indicator align-self-start">
                                                        <i className="material-icons">keyboard_arrow_down</i> 9%
                                                    </div>
                                                </div>
                                                <div className="widget-stats-chart">
                                                    <div id="widget-stats-chart3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget">
                                            <div className="card-header">
                                                <h5 className="card-title">Share this Link</h5>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted d-block">
                                                    This link will be opened in a new window
                                                </p>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid-bordered"
                                                        defaultValue="https://themeforest.net/user/stacks/portfolio"
                                                        aria-label="https://themeforest.net/user/stacks/portfolio"
                                                        aria-describedby="share-link1"
                                                    />
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        id="share-link1"
                                                    >
                                                        <i className="material-icons no-m fs-5">content_copy</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card widget widget-info">
                                            <div className="card-body">
                                                <div className="widget-info-container">
                                                    <div
                                                        className="widget-info-image"
                                                        style={{
                                                            background:
                                                                'url("../../assets/images/widgets/security.svg")'
                                                        }}
                                                    />
                                                    <h5 className="widget-info-title">Advanced Security</h5>
                                                    <p className="widget-info-text m-t-n-xs">
                                                        Nunc cursus tempor sapien, et mattis libero dapibus ut.
                                                        Ut a ante sit amet arcu imperdiet accumsan.
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="btn btn-primary widget-info-action"
                                                    >
                                                        Upgrade Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="card widget widget-popular-blog">
                                            <div className="card-body">
                                                <div className="widget-popular-blog-container">
                                                    <div className="widget-popular-blog-image">
                                                        <img
                                                            src="../../assets/images/widgets/product2.jpeg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-popular-blog-content ps-4">
                                                        <span className="widget-popular-blog-title">
                                                            Quisque congue risus sit amet pellentesque fermentum
                                                        </span>
                                                        <span className="widget-popular-blog-text">
                                                            Morbi blandit, mi at lacinia ornare, turpis justo
                                                            viverra risus, at tristique tortor massa ut arcu.
                                                            Suspendisse potenti. Suspendisse cursus aliquam
                                                            dictum. Curabitur nec fringilla orci. Vivamus ut
                                                            viverra elit. Pellentesque id interdum odio. Fusce
                                                            finibus maximus egestas.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <span className="widget-popular-blog-date">
                                                    Date: 6:38 PM
                                                </span>
                                                <a href="#" className="btn btn-primary float-end">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card widget widget-connection-request">
                                            <div className="card-header">
                                                <h5 className="card-title">
                                                    Connection Request
                                                    <span className="badge badge-secondary badge-style-light">
                                                        17 min ago
                                                    </span>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="widget-connection-request-container d-flex">
                                                    <div className="widget-connection-request-avatar">
                                                        <div className="avatar avatar-xl m-r-xs">
                                                            <img
                                                                src="../../assets/images/avatars/avatar.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="widget-connection-request-info flex-grow-1">
                                                        <span className="widget-connection-request-info-name">
                                                            Woodrow Hawkins
                                                        </span>
                                                        <span className="widget-connection-request-info-count">
                                                            45 mutual connections
                                                        </span>
                                                        <span className="widget-connection-request-info-about">
                                                            Senior Go Developer at Google
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="widget-connection-request-actions d-flex">
                                                    <a
                                                        href="#"
                                                        className="btn btn-primary btn-style-light flex-grow-1 m-r-xxs"
                                                    >
                                                        <i className="material-icons">done</i>Accept
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-danger btn-style-light flex-grow-1 m-l-xxs"
                                                    >
                                                        <i className="material-icons">close</i>Ignore
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Javascripts */}
        </>
    )
}