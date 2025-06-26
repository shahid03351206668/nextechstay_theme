$(document).ready(function () {
    setTimeout(function () { addAnalyticsItem() }, 2000);
    setTimeout(function () { addAnalyticsItem() }, 2500);
    setTimeout(function () { addAnalyticsItem() }, 3000);
    setTimeout(function () { addAnalyticsItem() }, 3500);
    setTimeout(function () { addAnalyticsItem() }, 4000);
    setTimeout(function () { addAnalyticsItem() }, 4500);
    setTimeout(function () { addAnalyticsItem() }, 5000);
});

function addAnalyticsItem() {
    if (!$(".standard-sidebar-section[data-title='Public']").find(".analytics-items").length) {

        $(".standard-sidebar-section[data-title='Public']").append($(`
            <div class="sidebar-item-container analytics-items" item-public="1" item-is-hidden="0" >
                <div class="desk-sidebar-item standard-sidebar-item">
                    <a href="/insights" class="item-anchor" title="Nextech Analytics" target="_blank">
                        <span class="sidebar-item-icon">
                            ${frappe.utils.icon("chart")}
                        </span>
                        <span class="sidebar-item-label">Analytics<span></span></span>
                    </a>
                </div>
            </div>
        `));
    }

    if (!$(".standard-sidebar-section[data-title='Public']").find(".pms-items").length) {

        $(".standard-sidebar-section[data-title='Public']").append($(`
            <div class="sidebar-item-container pms-items" item-public="1" item-is-hidden="0">
                <div class="desk-sidebar-item standard-sidebar-item">
                    <a href="https://mypms.nextechstay.com" class="item-anchor" title="Nextech pms" target="_blank">
                        <span class="sidebar-item-icon">
                            ${frappe.utils.icon("organization")}
                        </span>
                        <span class="sidebar-item-label">nextech .PMS<span></span></span>
                    </a>
                </div>
            </div>
        `));
    }
    if (!$(".standard-sidebar-section[data-title='Public']").find(".mydinepro-items").length) {

        $(".standard-sidebar-section[data-title='Public']").append($(`
            <div class="sidebar-item-container mydinepro-items" item-public="1" item-is-hidden="0">
                <div class="desk-sidebar-item standard-sidebar-item">
                    <a href="https://mydinepro.nextechstay.com/" class="item-anchor" title="Nextech mydinepro" target="_blank">
                        <span class="sidebar-item-icon">
                            ${frappe.utils.icon("folder-normal")}
                        </span>
                        <span class="sidebar-item-label">nextech .DinePro<span></span></span>
                    </a>
                </div>
            </div>
        `));
    }




}