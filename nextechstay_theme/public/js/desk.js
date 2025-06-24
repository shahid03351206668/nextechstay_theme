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
            <div class="sidebar-item-container analytics-items" item-public="1" item-is-hidden="0">
                <div class="desk-sidebar-item standard-sidebar-item">
                    <a href="/insights" class="item-anchor" title="Nextech Analytics">
                        <span class="sidebar-item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-chart-line-icon lucide-chart-line">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                                <path d="m19 9-5 5-4-4-3 3" />
                            </svg>
                        </span>
                        <span class="sidebar-item-label">Analytics<span></span></span>
                    </a>
                </div>
            </div>
        `));
    }
}