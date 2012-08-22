<html>
 <head>
  <link rel="stylesheet" href="${resource(dir: 'css', file: 'main.css')}" type="text/css" />
  <r:require module="application"/>
  <r:layoutResources/>
 </head>

 <body>
  <div><h2>Settings</h2>
   <div id="notifications"></div>
   <fieldset>
    <g:each var="setting" in="${settings}">
     <span><label for="${setting.id}"></label>${setting.id}: <g:textField id="${setting.id}" name="settingValue" value="${setting.value}" data-name="${setting.id}" /></span><br/>
    </g:each>
   </fieldset>
  </div>
  <r:layoutResources/>
 </body>
</html>