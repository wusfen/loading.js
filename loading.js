/**!
 * loading.js
 * wsf 20170704 20170706
 *
 * loading() // show
 * loading(false) // hide
 * 调用n次 loading() 须调用n次 loading(false) 才会关闭
 *
 * loading.show()
 * loading.hide()
 * 不管次数
 * 
 */
!(function() {
    var document = window.document;
    var body = document.body;

    // loading img
    var base64 = 'data:image/gif;base64,R0lGODlhQABAAIQAAAQCBFRWVCwqLHx6fDw+PBwaHGxubJSSlGRiZBQSFDQ2NISChERGRAwKDFxeXCQmJJyanAQGBFxaXCwuLHx+fERCRBweHHR2dJSWlGRmZDw6PISGhExKTJycnAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJDAAdACwAAAAAQABAAAAF/mAnjmRpjlCqjos1VdKAnXRt32qejhTg/4LA5kYsonRI3m/pe2QgxmgJSYWKekxmwmGVFqtUZTZbMHhx4PC1MR4rDudTWk3CUBwKdhvQuMRJcztGGAYEEXsOfx2BfxgBh1kMiotVkyIYDEySlkmWJBQJPpsiXUSCpCueJRgKo5SlNTmAql+yNp20tTq3uLmxdCaVvmi9R8DDcsKAx8jJxcrNvL3Q0TTQzNXOtq+72cTd2N7BneHiy7vl5udz6qaBsO3jjPG/7PT1affSYPr4p/0AAwrU9m/gvIHc8iF8B68fQ4QJ+S1Mkk6dmormLmLMpmxjNWDU2l3ziIxaSHEhSiVaPHnyY7iWzWBGpFdx26KVqdCsK/kvp5RinGw2dEfSn88zB73Yi/MwyrugTeU99cQwZ9Wjk64amzosalWOS7mi7KjyHq6iNEIAACH5BAkMABwALAAAAABAAEAAhAQCBFRSVCQmJHx6fBwaHGRmZDw+PIyOjAwODFxaXDQyNJSWlAwKDIyKjHRydERGRAQGBFRWVCwuLHx+fCQiJERCRJSSlBQSFFxeXDQ2NJyanHR2dJycnAAAAAAAAAAAAAX+ICeOZGmOWqqi6nq+cBy3NEu7cq5z9233uJ1QBPQRi7XhDpnkMVtK2bM5bUZJ1eAxe8U+hdWuE9llisfGM/C81bKtGnD8xz4FFwKMDoqq7/AQABtSVn45gAAACBYzaYYxeImSGTBrj1ISkpIOdpaXMQcImgAECyaenzEbowB6Xo6pMQ+jF3NtfLEyC4GaBa+4uTIRowI/wMEwu6MNtynIO7OaAc22zzETxGhu1naimgs93DoGoxvh4jIYownn6DDYmgaw7iYLowrz9CXeiQT5+iMOHGjQQCDAgwgTLimk8ItCY0UeUmvXcIpEbRElhqN48BxHgB4/uvMkEh1FVCNUT5a0hhIlN5cZxcX8deyZy4kmV2KkpxMNFpk1O/1KFWRbjn9lgFWT03NP00ZkrphJ6nDhVDFZlkKM+ibr1qt1vE68GdbiWKR+qpp9SXImTypod4QAACH5BAkMABwALAAAAABAAEAAhAQCBFRSVHx+fCwqLIyOjBQWFGxubDw+PAwODGRiZISGhJSWlFxaXDw6PCQmJHR2dERGRAwKDFRWVISChDQyNJSSlBwaHHRydBQSFIyKjJyanExKTJycnAAAAAAAAAAAAAX+ICeOZGmOWqqi6nq+cBy3NEu7cq5z9233uJ1QBPQRi7XhDpnkMVtK2bM5bUZJ1eAxe8U+hdWuE9llisfGM/C81bKtGnD8xz4F3fZ7fQmdWfc5PX5/gC9rhoKFgYklRYqLjD99j1KRaJOUlWmXeJkmh22dnp9poKODSZanMImqq3k1rq+wZrOQtbaoZLm6pry0jr+9m8KkmMXIycq9yyUWCBgICAPEygsA2NjU1cgT2dgHssIJ3wAS4r8H5RfovAjlC5xzygLlDqEpzRDlAfj5yQvefVMg6R8yCfa8cJsVsFwChYRsbSiHYJ4/i7bqlZNgbKGnBRbKFcB4kZe6cgZUEHmktKBAOQrMeBEQCAABAU0WSXoi4BJAykUQKQVRUIBjlJVHMd1M2k6HLyVfruBiOvVWMDFZdMq7qiZrwah7vF58GnbKV7KFwJq1dXVXsVJIdYQAACH5BAkMAB4ALAAAAABAAEAAhAQCBFRSVCwqLHx+fBQWFGRmZDw+PIyOjAwODFxeXBweHExKTJSWlAwKDDQ2NISGhHRydAQGBFRWVCwuLISChBwaHGxqbERGRJSSlBQSFGRiZCQiJExOTJyanJycnAAAAAX+oCeOZGmOXaqi6nq+cBy3NEu7cq579233uJ1QBPQRi7XhDpnkMVtK2bM5bUZJ1eAxe8U+hdWuE9llisfGM/C81bKtHXD8xz4F3fZ7fQmdWfc5PX5/gC9rhoKFgYklRYqLjD99j1KRaJOUlWmXeJkmh22dnp9poKODSZanMImqq3k1rq+wZrOQtbaoZLm6pry0jr+9m8KkmMXIycq9y424zWHNnL7J0dBT0tPay63Exd3evKCytpHU5ebkq77n66rB6K7tnu3zlPbhp+poWPEpOv/oPGJgQIOXOUrydXmgAAAAgyiuwBPDgEMEhw4hlnk2pCICjCA1RrGm48GCBiBJU0p4w+XEAwsXCKRMGQHCniwBPVAgcHHmzAkHCuEcMcDnTAQFMlkratRhgwAM9OFi6lNBgqj+mlDFqIADhWpaCQhwEABCUDYhAAAh+QQJDAAcACwAAAAAQABAAIQEAgRUUlQ0MjR8fnwUFhRkZmSMjowMDgxERkQkIiRkYmQMCgxcWlyEhoQcHhx0cnSUlpRMTkwEBgRUVlQ0NjQcGhxsamwUEhRMSkwkJiSMioycmpycnJwAAAAAAAAAAAAF/iAnjmRpjluqoup6vnActzRLu3Kuc/dt97idUAT0EYu14Q6Z5DFbStmzOW1GSdXgMXvFPoXVrhPZZYrHxjPwvNWyrRtw/Mc+Bd32e30JnVn3OT1+f4Ava4aChYGJJUWKi4w/fY9SkWiTlJVpl3iZJodtnZ6faaCjg0mWpzCJqqt5Na6vsGazkLW2qGS5uqa8tI6/vZvCpJjFyMnKvcuNuM1hzZy+ydHQU9LT2sutxMXd3rygsraR1OXm5Ku+5+uqweiu7Z7t85T24afqaFjxKTr/RkDIgGCOojsBlQyUACBBg4OYDA5ZCKCihAkSy+yTMbCix4oEFGSUAy/KhggfT1MeiPCQ5C4xBRim/FgBgQUNiKyd0ZBhpk8JAiRhA7RBwQGfKR0IfakIQoQFSCsqDcWUEoQJFZBOnZYv0wAEDpIuFfXKgIUAFBIEpToySggAIfkECQwAGQAsAAAAAEAAQACEBAIEVFZUNDY0fH58FBYUjI6MDA4MbGpsJCIkREZEDAoMZGJkhIaEHB4clJaUTE5MBAYEXFpcHBocFBIUbG5sJCYkTEpMjIqMnJqcnJycAAAAAAAAAAAAAAAAAAAAAAAABf5gJo5kaY5YqqLqer5wHLc0S7tyrmf3bfe4nVAE9BGLteEOmeQxW0rZszltRknV4DF7xT6F1a4T2WWKx8Yz8LzVsq0YcPzHPgXd9nt9CZ1Z9zk9fn+AL2uGgoWBiSVFiouMP32PUpFok5SVaZd4mSaHbZ2en2mgo4NJlqcwiaqreTWur7Bms5C1tqhkubqmvLSOv72bwqSYxcjJyjEIBhMGBhXLjTQIANcAENOSKQLY1xfbnBgP3wAH4j0H5gnpNwXmDe41EuYM04kJ5g/4RgPmBuYgA1Xv2wJlDjZFMEdA4C9TDhSYCzDQUrlvEO49VOXAgDkEDl8FK7HAHIB2uVJ8oajALqUsEQwgYEPpklCJdSex2LJpwgJNNJTupFji5dgbTCH5vJRDTMmXK7iihGG6S0yWpKGiWr3K7ekerlmrKpo6TuVYXFNqlhopbC3PISEAACH5BAkMAB0ALAAAAABAAEAAhAQCBFRSVCwuLHx+fBQWFGRmZIyOjAwODDw+PCQiJGxubJSWlAwKDFxeXIyKjBweHERGRAQGBDw6PISChBwaHGxqbJSSlBQSFCQmJHRydJyanGRiZExKTJycnAAAAAAAAAX+YCeOZGmOWqqi6nq+cBy3NEu7cq539233uJ1QBPQRi7XhDpnkMVtK2bM5bUZJ1eAxe8U+hdWuE9llisfGM/C81bKtGmFg402xT0H3SQEA0FF3S1AxDgx9AA2BQz0wGgKHfYmKOWsvBZB9CJM6lSULB5gPcZtSnSMBmAATpJyMJAuGkAGsgmkdDZgHC7StthSYkryUaQOYDLvCw0YcmBzJtYMJmKvPylAGmATV0CoZmBDbvS2okBXh1ioSmA7npTQYkBGj7S89BJDa9DM0Bg7+Dgb07RsksKDBg+jmIWxjCmGYhWjIQHy4kKJDH64OuspocCNHfZ0+0uPY8JypkuFUGqJ8VrJIO5cmVvJaKZNVTVvbRJYgyCMlz0YKfwbKYycKzjc8FYKpyU3PUolGoUb98lTqlSxKf1BFyoXhlElYtZqx+dUrzJljIzLddNbqSypHo4QAACH5BAkMAB4ALAAAAABAAEAAhAQCBFRSVCwqLHx+fBQWFIyOjGxqbDw+PAwODGRiZISGhJSWlERGRAwKDFxaXDw6PCQmJHRydAQGBFRWVCwuLISChBweHJSSlERCRBQSFIyKjJyanExKTHR2dJycnAAAAAX+oCeOZGmOS+cc1DNucLyddG3fSgABPG+9suBtSHwldr3kTxRsworQ0sKBSFoBS49zG4UaCNdrdsvt2gqUcFgAJDvNp0hVDUAcEoOFyf2GjyZ0EgwDUHwxfh4XGWESAXpwfIgeGotJDBeSTH2SlD6EmSRCL4UzIwoED4+goU9tRDIkmKtDojVNs6S1J5u4trwlZb02way/wnvEmrfHN8nJzDTEz9DIy8qw1LTW09nAfcbdu8vg4d5C5OXmkenNhqXsvobww/Lz8W729Pj50br8/wADVjsksA2Zgtf2CXT3LiBDhA8LvkHH7pu1fxYv2gtGMRwvbh4/dqTmbOSxZwdMK04DyYwbS2EsNYb0NzBUOpriijWcRVAZJJyIdO0sklLSy3YKu6z7WY9oUz8MWw18GjTqO6tSQVk1SJWnO65JTy79epNj0Y21TN4IAQA7NnI1QWFtb2QzTW9vQjBZVy9UZ2RvTVhVMERIZGhTNWVXWUpPU1pMT3ZQSlMxekIrWHpOU2dRM0wyYkFOdUpxVg==';
    var imgHtml = '<img width="32" height="32" src="' + base64 + '">';

    // loading view
    var el = document.createElement('div');
    el.setAttribute('style', 'position: fixed; width: 100px; height: 100px; top: 0; left: 0; right: 0; bottom: 0; margin: auto; text-align: center; color: #FFFFFF; text-shadow: 2px 1px 1px #484848; z-index: 651;')
        // el.innerHTML = 'loading...';
    el.innerHTML = imgHtml;

    // cover view
    var cover = document.createElement('div');
    cover.setAttribute('style', 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #3C3C3C; opacity: .125; z-index: 650; -webkit-user-select: none; user-select: none;')

    cover.style.webkitTransition = '.5s';
    cover.style.mozTransition = '.5s';
    cover.style.msTransition = '.5s';
    cover.style.transition = '.5s';

    cover.onclick = function() {
        hide();
    };

    var removeTimer;

    // show
    function show() {
        clearTimeout(removeTimer);
        if (el.parentNode == body) {
            return
        }
        cover.style.background = '';
        body.appendChild(cover);
        setTimeout(function() {
            cover.style.background = '#3C3C3C';
        }, 1)

        body.appendChild(el);
    }

    // hide
    function hide() {
        cover.style.background = '#3C3C3C';
        setTimeout(function() {
            cover.style.background = '';
        }, 1);
        removeTimer = setTimeout(function() {
            cover.parentNode && cover.parentNode.removeChild(cover);
        }, 500)

        el.parentNode && el.parentNode.removeChild(el);
    }

    // count
    var count = 0;

    function loading(arg) {
        // show
        if (!arguments.length || arg) {
            count++;
            if (count > 0) {
                show();
            }
        }
        // hide
        else {
            count--;
            if (count < 1) {
                hide();
                count = 0;
            }
        }
    }

    // export
    loading.show = show;
    loading.hide = hide;
    loading.getCount = function() {
        return count
    };
    window.loading = loading;
})();
