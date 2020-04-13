package cordova.plugin.scanner

import android.support.v7.app.AppCompatActivity;

import android.os.Bundle
import android.widget.Toast

class TestActivity : AppCompatActivity() {

    
    var package_name:String?="";

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // setContentView(R.layout.activity_test)

        package_name = getApplication().getPackageName();
        setContentView(getApplication().getResources().getIdentifier("activity_test", "layout", package_name));


        Toast.makeText(this,"TestActivity",Toast.LENGTH_SHORT).show();
        
    }
}
