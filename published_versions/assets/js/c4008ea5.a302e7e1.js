"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"mysql",title:"MySQL Metadata Store"},s=void 0,d={unversionedId:"development/extensions-core/mysql",id:"development/extensions-core/mysql",title:"MySQL Metadata Store",description:"\x3c!--",source:"@site/docs/27.0.0/development/extensions-core/mysql.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/mysql",permalink:"/docs/27.0.0/development/extensions-core/mysql",draft:!1,tags:[],version:"current",frontMatter:{id:"mysql",title:"MySQL Metadata Store"}},p={},m=[{value:"Installing the MySQL connector library",id:"installing-the-mysql-connector-library",level:2},{value:"Alternative: Installing the MariaDB connector library",id:"alternative-installing-the-mariadb-connector-library",level:2},{value:"Setting up MySQL",id:"setting-up-mysql",level:2},{value:"Encrypting MySQL connections",id:"encrypting-mysql-connections",level:2},{value:"Configuration",id:"configuration",level:2},{value:"MySQL InputSource",id:"mysql-inputsource",level:3}],c={toc:m},u="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql-metadata-storage")," in the extensions load list."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," The MySQL extension requires the MySQL Connector/J library or MariaDB Connector/J library, neither of which are included in the Druid distribution.\nRefer to the following section for instructions on how to install this library.")),(0,i.kt)("h2",{id:"installing-the-mysql-connector-library"},"Installing the MySQL connector library"),(0,i.kt)("p",null,"This extension can use Oracle's MySQL JDBC driver which is not included in the Druid distribution. You must\ninstall it separately. There are a few ways to obtain this library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It can be downloaded from the MySQL site at: ",(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/connector/j/"},"https://dev.mysql.com/downloads/connector/j/")),(0,i.kt)("li",{parentName:"ul"},"It can be fetched from Maven Central at: ",(0,i.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar"},"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar")),(0,i.kt)("li",{parentName:"ul"},"It may be available through your package manager, e.g. as ",(0,i.kt)("inlineCode",{parentName:"li"},"libmysql-java")," on APT for a Debian-based OS")),(0,i.kt)("p",null,"This fetches the MySQL connector JAR file with a name like ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql-connector-java-5.1.49.jar"),"."),(0,i.kt)("p",null,"Copy or symlink this file inside the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions/mysql-metadata-storage")," under the distribution root directory."),(0,i.kt)("h2",{id:"alternative-installing-the-mariadb-connector-library"},"Alternative: Installing the MariaDB connector library"),(0,i.kt)("p",null,"This extension also supports using the MariaDB connector jar, though it is also not included in the Druid distribution, so you must install it separately."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download from the MariaDB site: ",(0,i.kt)("a",{parentName:"li",href:"https://mariadb.com/downloads/connector"},"https://mariadb.com/downloads/connector")),(0,i.kt)("li",{parentName:"ul"},"Download from Maven Central: ",(0,i.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/mariadb/jdbc/mariadb-java-client/2.7.3/mariadb-java-client-2.7.3.jar"},"https://repo1.maven.org/maven2/org/mariadb/jdbc/mariadb-java-client/2.7.3/mariadb-java-client-2.7.3.jar"))),(0,i.kt)("p",null,"This fetches the MariaDB connector JAR file with a name like ",(0,i.kt)("inlineCode",{parentName:"p"},"maria-java-client-2.7.3.jar"),"."),(0,i.kt)("p",null,"Copy or symlink this file to ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions/mysql-metadata-storage")," under the distribution root directory."),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql-metadata-storage")," extension to use the MariaDB connector library instead of MySQL, set ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.metadata.mysql.driver.driverClassName=org.mariadb.jdbc.Driver"),"."),(0,i.kt)("p",null,"Depending on the MariaDB client library version, the connector supports both ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:mysql:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:mariadb:")," connection URIs. However, the parameters to configure the connection vary between implementations, so be sure to ",(0,i.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/about-mariadb-connector-j/#connection-strings"},"check the documentation")," for details."),(0,i.kt)("h2",{id:"setting-up-mysql"},"Setting up MySQL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install MySQL"),(0,i.kt)("p",{parentName:"li"},"Use your favorite package manager to install mysql, e.g.:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"on Ubuntu/Debian using apt ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get install mysql-server"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"on OS X, using ",(0,i.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install mysql")),(0,i.kt)("p",{parentName:"li"},"Alternatively, download and follow installation instructions for MySQL\nCommunity Server here:\n",(0,i.kt)("a",{parentName:"p",href:"http://dev.mysql.com/downloads/mysql/"},"http://dev.mysql.com/downloads/mysql/"),"."))),(0,i.kt)("p",null,"This extension also supports using MariaDB server, ",(0,i.kt)("a",{parentName:"p",href:"https://mariadb.org/download/"},"https://mariadb.org/download/"),", substituting for MariaDB in the following instructions where appropriate."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a druid database and user"),(0,i.kt)("p",{parentName:"li"},"Connect to MySQL from the machine where it is installed."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root\n")),(0,i.kt)("p",{parentName:"li"},"Paste the following snippet into the mysql prompt:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a druid database, make sure to use utf8mb4 as encoding\nCREATE DATABASE druid DEFAULT CHARACTER SET utf8mb4;\n\n-- create a druid user\nCREATE USER 'druid'@'localhost' IDENTIFIED BY 'diurd';\n\n-- grant the user all the permissions on the database we just created\nGRANT ALL PRIVILEGES ON druid.* TO 'druid'@'localhost';\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure your Druid metadata storage extension:"),(0,i.kt)("p",{parentName:"li"},"Add the following parameters to your Druid configuration, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>"),"\nwith the location (host name and port) of the database."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'druid.extensions.loadList=["mysql-metadata-storage"]\ndruid.metadata.storage.type=mysql\ndruid.metadata.storage.connector.connectURI=jdbc:mysql://<host>/druid\ndruid.metadata.storage.connector.user=druid\ndruid.metadata.storage.connector.password=diurd\n')))),(0,i.kt)("p",null,"If using the MariaDB connector library, set ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.metadata.mysql.driver.driverClassName=org.mariadb.jdbc.Driver"),"."),(0,i.kt)("h2",{id:"encrypting-mysql-connections"},"Encrypting MySQL connections"),(0,i.kt)("p",null,"  This extension provides support for encrypting MySQL connections. To get more information about encrypting MySQL connections using TLS/SSL in general, please refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/using-encrypted-connections.html"},"guide"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.useSSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable SSL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.clientCertificateKeyStoreUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"The file path URL to the client certificate key store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.clientCertificateKeyStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the key store where the client certificate is stored."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.clientCertificateKeyStorePassword")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/27.0.0/operations/password-provider"},"Password Provider")," or String password for the client key store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.verifyServerCertificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables server certificate verification."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.trustCertificateKeyStoreUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"The file path to the trusted root certificate key store."),(0,i.kt)("td",{parentName:"tr",align:null},"Default trust store provided by MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},"yes if ",(0,i.kt)("inlineCode",{parentName:"td"},"verifyServerCertificate")," is set to true and a custom trust store is used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.trustCertificateKeyStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the key store where trusted root certificates are stored."),(0,i.kt)("td",{parentName:"tr",align:null},"JKS"),(0,i.kt)("td",{parentName:"tr",align:null},"yes if ",(0,i.kt)("inlineCode",{parentName:"td"},"verifyServerCertificate")," is set to true and keystore type is not JKS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.trustCertificateKeyStorePassword")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/27.0.0/operations/password-provider"},"Password Provider")," or String password for the trust store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes if ",(0,i.kt)("inlineCode",{parentName:"td"},"verifyServerCertificate")," is set to true and password is not null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.enabledSSLCipherSuites")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides the existing cipher suites with these cipher suites."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.metadata.mysql.ssl.enabledTLSProtocols")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides the TLS protocols with these protocols."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h3",{id:"mysql-inputsource"},"MySQL InputSource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "dataSchema": {\n      "dataSource": "some_datasource",\n      "dimensionsSpec": {\n        "dimensionExclusions": [],\n        "dimensions": [\n          "dim1",\n          "dim2",\n          "dim3"\n        ]\n      },\n      "timestampSpec": {\n        "format": "auto",\n        "column": "ts"\n      },\n      "metricsSpec": [],\n      "granularitySpec": {\n        "type": "uniform",\n        "segmentGranularity": "DAY",\n        "queryGranularity": {\n          "type": "none"\n        },\n        "rollup": false,\n        "intervals": null\n      },\n      "transformSpec": {\n        "filter": null,\n        "transforms": []\n      }\n    },\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "sql",\n        "database": {\n          "type": "mysql",\n          "connectorConfig": {\n            "connectURI": "jdbc:mysql://some-rds-host.us-west-1.rds.amazonaws.com:3306/druid",\n            "user": "admin",\n            "password": "secret"\n          }\n        },\n        "sqls": [\n          "SELECT * FROM some_table"\n        ]\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);