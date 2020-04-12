/********* ScannerPlugin.java Cordova Plugin Implementation *******/
package cordova.plugin.scanner;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.content.pm.PackageManager;
import android.widget.Toast;



/**
 * This class echoes a string called from JavaScript.
 */
public class ScannerPlugin extends CordovaPlugin {
     // Member variables go here.
     
     public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        
     }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }else  if (action.equals("openScanner")) {
            this.openScanner(args, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void openScanner(JSONArray args, CallbackContext callbackContext) 
    {      
           final CordovaPlugin that = this;
           try 
           {
                cordova.getThreadPool().execute(new Runnable() {
                public void run() 
                {

                    Intent intent = new Intent(that.cordova.getActivity().getBaseContext(), TestActivity.class);
                    that.cordova.getActivity().startActivity(intent);

                }
              });
        
            }catch (Exception e){
                 callbackContext.error("scan failed");
                 
            }
                
    }
}
