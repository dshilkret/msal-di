function create_zip() {
  var zip = new JSZip();
  var zipFilename = "super-legit.zip";
  var urls = [
    "https://s3.amazonaws.com/limbforge/EbeArm/Ebe_forearm_L/forearm_L_C4-200_L1-220.stl",  //works
    'https://s3-us-west-2.amazonaws.com/test-dcc67e4a-9949-42c3-9609-666e4dd87e48/disco.stl', //works
    'https://www.irs.gov/pub/irs-pdf/fw4.pdf', //works
    //'https://dtecho365.sharepoint.com/sites/Demo01/_api/web/getFileByServerRelativeUrl(%27/sites/Demo01/demo02lib/application.pdf%27)/openbinarystream',
    'https://dtecho365.sharepoint.com/_api/web/getFileByServerRelativeUrl(\'/documents/change_address_contact_details_email_id.pdf\')/openbinarystream',
    //'https://dtecho365.sharepoint.com/sites/Demo01/_api/web/getFileByServerRelativeUrl(%37/sites/Demo01/demo02lib/application.pdf%37)',
    //'https://dtecho365.sharepoint.com/sites/ServiceNowDev1/_layouts/15/download.aspx?UniqueId=88f173be%2Dc4a6%2D4b0b%2D839d%2D05a44f8dd899',
    // 'https://dtecho365.sharepoint.com/sites/Demo01/_api/Web/Lists(guid%2709adb51e-b024-4c20-87ca-ebc3f31fa95a%27)/Items(1246)',
    // 'https://dtecho365.sharepoint.com/:w:/r/sites/ServiceNowQA1/_layouts/15/Doc.aspx?sourcedoc=%7Bab3310c5-2bdb-4d68-9cdb-f0f630265add%7D',
    // 'https://dtecho365.sharepoint.com/:b:/r/sites/Demo01/demo02lib/application.pdf?csf=1&web=1&e=wrucuT',
    // 'https://dtecho365.sharepoint.com/:b:/r/sites/Demo01/demo02lib/application.pdf?csf=1&download=1&e=wrucuT',
    
  
    


  ];

  var count = 0;

  // We're asynchronously asking for all of the files
  // We increment the count once each file is completely downloaded
  // Once the last file is downloaded (aka count == urls.length) then zip it and download it
  urls.forEach(function (url) {
    
    // Grab the filename from the url
    // For example if the url is http://google.com/awesome/foo.stl
    // We set filename = foo.stl
    var indexOfLastSlash = url.lastIndexOf('/');
    var filename = url.substring(indexOfLastSlash + 1);

    // Load a file from an external url and add it in a zip file
    // Beware! This will fail if the file is not binary
    // aka if it is a text file or an ascii stl model
    
    //DS Additions for testing purposes
    //var key = "Identity.OAuth.i:0h.f|membership|100320003e1cb801@live.comsharepoint_selfissued|https://dtecho365.sharepoint.com|spo";
    //var obj = {"value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkcydDJKYzlkMVZ6RkdjdzZUZy02YUhZVXk2VSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBAY2MwMzY5MWItNDU2Yy00MTE2LThkZGQtMTU3YzA4Y2ZlM2QyIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxMzQ5Nzk3MyIsImV4cCI6IjE2MTM1MDE1NzMiLCJ1cG4iOiJzZXJ2aWNlbm93YWRtaW5AZHRlY2hvMzY1Lm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMDNFMUNCODAxIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDAzZTFjYjgwMUBsaXZlLmNvbSIsInZlciI6ImJyb3dzZXIiLCJ0aWQiOiJjYzAzNjkxYi00NTZjLTQxMTYtOGRkZC0xNTdjMDhjZmUzZDIiLCJhcHBpZCI6ImM1ODYzN2JiLWUyZTEtNDMxMi04YTAwLTA0YjVmZmNkMzQwMyIsImFwcF9kaXNwbGF5bmFtZSI6IlNoYXJlUG9pbnQgT25saW5lIENsaWVudCBFeHRlbnNpYmlsaXR5Iiwic2NwIjoiRmlsZXMuUmVhZFdyaXRlLkFsbCBTaXRlcy5NYW5hZ2UuQWxsIFNpdGVzLkZ1bGxDb250cm9sLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCIsImlwYWRkciI6IjEwNC41Ny4xODguMTIxIiwic2Vzc2lvbmlkIjoiNzE3MDY1MDUtODcwZS00NDlhLWEyMmUtZWE0Mjk4OTllYzE4Iiwic2lnbmluX3N0YXRlIjoiW1wia21zaVwiXSJ9.U4nQfQRrjhzmLBMNTD4-D4kaYxGAqeP7m6s8_Uoet8bV60ATeWE_qWh0X4_GyuNGyoxis-HfiI_jfwSbBIRtVvhVvsGnHQwTk5_9zOqOn7dqrCc7eDLqaoaPR8pBHzmNr126s-gTVs1ihjtURiQPWR996CLGgm6j8UVPgpZO6Lx-rsWdVXf92KCq8AhuBMxq24wkpZSmBEa2v9XhTLS0RLqASpbBcr0qQO93dDxskww9fTF-Pl6SL7klk-BXEqUa_iNN7k2t_Z-KyN-eIAFYSslKWBWPOtz2cjoyzLOaBh84ktn_s420hre61tcs58eozIeFsxojfOLrrbdGOihIjQ","expiration":1613501273000};    //localStorage.setItem(key, JSON.stringify(obj));
    //localStorage.setItem(key, JSON.stringify(obj));
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if(err) {
        // Probably should do something better here...
        // For example if the file server is down, provide some kind of info to the user
        console.log("DS-err: " + err);
        alert("DS-err: " + err);
        throw err;
      }

      // Add the file to the zip
      zip.file(filename, data, { binary: true });
      count++;

      // We're all done! Zip it and ship it
      if (count == urls.length) {
        zip.generateAsync({ type: "blob" })
        .then(function(zipFile) {
          saveAs(zipFile, zipFilename);
        });
      }
    });
  });
}

$( document ).ready(function() {
  $("#cool").click(function(){
    create_zip();
  });
});
