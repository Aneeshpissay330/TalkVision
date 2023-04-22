package com.talkvision;

import android.util.Base64;

import androidx.annotation.NonNull;

import com.cloudinary.android.MediaManager;
import com.cloudinary.android.callback.ErrorInfo;
import com.cloudinary.android.callback.UploadCallback;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;

public class CloudinaryModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    public CloudinaryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "CloudinaryModule";
    }

    @ReactMethod
    public void initializeApp(String cloudName, final Promise promise){
        Map config = new HashMap();
        config.put("cloud_name", cloudName);
        MediaManager.init(reactContext, config);
    }

    @ReactMethod
    public void uploadImage(String base64Image, final Promise promise) {
        byte[] decodedBytes = Base64.decode(base64Image, Base64.DEFAULT);
        MediaManager.get().upload(decodedBytes).callback(new UploadCallback() {
            @Override
            public void onStart(String requestId) {
                WritableMap result = Arguments.createMap();
                result.putString("request_id", requestId);
                promise.resolve(result);
            }

            @Override
            public void onProgress(String requestId, long bytes, long totalBytes) {
                WritableMap result = Arguments.createMap();
                result.putString("request_id", requestId);
                result.putString("bytes", String.valueOf(bytes));
                result.putString("bytes", String.valueOf(totalBytes));
                promise.resolve(result);
            }

            @Override
            public void onSuccess(String requestId, Map resultData) {
                WritableMap result = Arguments.createMap();
                result.putString("public_id", (String) resultData.get("public_id"));
                result.putString("url", (String) resultData.get("url"));
                promise.resolve(result);
            }

            @Override
            public void onError(String requestId, ErrorInfo error) {
                promise.reject(error.getDescription(), error.getDescription());
            }

            @Override
            public void onReschedule(String requestId, ErrorInfo error) {
                promise.reject(error.getDescription(), error.getDescription());
            }
        }).dispatch();
    }
}