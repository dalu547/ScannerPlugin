var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ScannerPluginOriginal = /** @class */ (function (_super) {
    __extends(ScannerPluginOriginal, _super);
    function ScannerPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScannerPluginOriginal.prototype.functionName = function (arg1, arg2) { return cordova(this, "functionName", {}, arguments); };
    ScannerPluginOriginal.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    ScannerPluginOriginal.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    ScannerPluginOriginal.pluginName = "ScannerPlugin";
    ScannerPluginOriginal.plugin = "cordova-plugin-scanner";
    ScannerPluginOriginal.pluginRef = "ScannerPlugin";
    ScannerPluginOriginal.repo = "https://github.com/dalu547/ScannerPlugin.git";
    ScannerPluginOriginal.install = "";
    ScannerPluginOriginal.installVariables = [];
    ScannerPluginOriginal.platforms = ["Android"];
    return ScannerPluginOriginal;
}(IonicNativePlugin));
var ScannerPlugin = new ScannerPluginOriginal();
export { ScannerPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjYW5uZXItcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDekYsaUNBQWlCOzs7O0lBU2xELG9DQUFZLGFBQUMsSUFBWSxFQUFFLElBQVk7SUFLdkMsa0NBQVUsYUFBQyxJQUFTO0lBTXBCLG1DQUFXOzs7Ozs7Ozt3QkFsRWI7RUE4Q21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTY2FubmVyIFBsdWdpblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBtdWx0aXBsZSBiYXIvUVIgY29kZXMgaW4gc2luZ2xlIHNob3QuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNjYW5uZXJQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NjYW5uZXItcGx1Z2luJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzY2FubmVyUGx1Z2luOiBTY2FubmVyUGx1Z2luKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc2Nhbm5lclBsdWdpbi5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2Nhbm5lclBsdWdpbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2Nhbm5lcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ1NjYW5uZXJQbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYWx1NTQ3L1NjYW5uZXJQbHVnaW4uZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2FubmVyUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXHJcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXHJcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZnVuY3Rpb25OYW1lKGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgY29vbE1ldGhvZChhcmcxOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcblxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlblNjYW5uZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=