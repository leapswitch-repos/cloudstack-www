"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5375],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,s(s({ref:e},p),{},{components:n})):a.createElement(k,s({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,s[1]=i;for(var m=2;m<l;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6402:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},s="INFO sections",i={unversionedId:"info-sections",id:"info-sections",title:"INFO sections",description:"The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.",source:"@site/docs/info-sections.md",sourceDirName:".",slug:"/info-sections",permalink:"/docs/info-sections",draft:!1,editUrl:"https://github.com/apache/cloudstack-www/tree/main/docs/info-sections.md",tags:[],version:"current",lastUpdatedBy:"Rohit Yadav",lastUpdatedAt:1683201469,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Supported commands",permalink:"/docs/supported-commands"}},o={},m=[{value:"Return value",id:"return-value",level:3},{value:"Server section",id:"server-section",level:2},{value:"Clients section",id:"clients-section",level:2},{value:"Memory section",id:"memory-section",level:2},{value:"Stats section",id:"stats-section",level:2},{value:"CommandStats section",id:"commandstats-section",level:2},{value:"Persistence section",id:"persistence-section",level:2},{value:"Replication section",id:"replication-section",level:2},{value:"CPU section",id:"cpu-section",level:2},{value:"Keyspace section",id:"keyspace-section",level:2},{value:"RocksDB section",id:"rocksdb-section",level:2}],p={toc:m},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"info-sections"},"INFO sections"),(0,r.kt)("p",null,"The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans."),(0,r.kt)("p",null,"The optional section parameter can be used to select a specific section of information in form ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO section section ..."),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server"),(0,r.kt)("td",{parentName:"tr",align:null},"General information about the Kvrocks server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clients"),(0,r.kt)("td",{parentName:"tr",align:null},"Client connections information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memory"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory consumption related information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stats"),(0,r.kt)("td",{parentName:"tr",align:null},"General statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replication"),(0,r.kt)("td",{parentName:"tr",align:null},"Master/replica replication information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU consumption statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandstats"),(0,r.kt)("td",{parentName:"tr",align:null},"Kvrocks command statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyspace"),(0,r.kt)("td",{parentName:"tr",align:null},"Database related statistics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"RocksDB related statistics")))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"The return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO")," command is bulk string: as a collection of text lines."),(0,r.kt)("p",null,"Lines can contain a section name (starting with a # character) or a property. All the properties are in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"field:value")," terminated by an empty line."),(0,r.kt)("p",null,"Sample return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Server\nversion:999.999.999\ngit_sha1:d2c0afb\nos:Darwin 19.4.0 x86_64\ngcc_version:4.2.1\narch_bits:64\nprocess_id:1467\ntcp_port:6666\nuptime_in_seconds:8\nuptime_in_days:0\n\n# Clients\nconnected_clients:1\nmonitor_clients:0\n# Memory\nused_memory_rss:19558400\nused_memory_human:18.65M\nused_memory_lua:35840\nused_memory_lua_human:35.00K\n\n# Persistence\nloading:0\n\n# Stats\ntotal_connections_received:1\ntotal_commands_processed:2\ninstantaneous_ops_per_sec:0\ntotal_net_input_bytes:23\ntotal_net_output_bytes:8231\ninstantaneous_input_kbps:0\ninstantaneous_output_kbps:0\nsync_full:0\nsync_partial_ok:0\nsync_partial_err:0\npubsub_channels:0\npubsub_patterns:0\n\n# Replication\nrole:master\nconnected_slaves:0\nmaster_repl_offset:0\n\n# CPU\nused_cpu_sys:0\nused_cpu_user:0\n\n# Commandstats\ncmdstat_command:calls=1,usec=904,usec_per_call=904\ncmdstat_info:calls=1,usec=0,usec_per_call=0\n\n# Keyspace\n# Last scan db time: Thu Jan  1 08:00:00 1970\ndb0:keys=0,expires=0,avg_ttl=0,expired=0\nsequence:0\nused_db_size:0\nmax_db_size:0\nused_percent: 0%\ndisk_capacity:499963174912\nused_disk_size:266419978240\nused_disk_percent: 53%\n\n# RocksDB\nestimate_keys[default]:0\nblock_cache_usage[default]:0\nblock_cache_pinned_usage[default]:0\nindex_and_filter_cache_usage:[default]:0\nestimate_keys[metadata]:0\nblock_cache_usage[metadata]:0\nblock_cache_pinned_usage[metadata]:0\nindex_and_filter_cache_usage:[metadata]:0\nestimate_keys[zset_score]:0\nblock_cache_usage[zset_score]:0\nblock_cache_pinned_usage[zset_score]:0\nindex_and_filter_cache_usage:[zset_score]:0\nestimate_keys[pubsub]:0\nblock_cache_usage[pubsub]:0\nblock_cache_pinned_usage[pubsub]:0\nindex_and_filter_cache_usage:[pubsub]:0\nestimate_keys[propagate]:0\nblock_cache_usage[propagate]:0\nblock_cache_pinned_usage[propagate]:0\nindex_and_filter_cache_usage:[propagate]:0\nall_mem_tables:3520\ncur_mem_tables:3520\nsnapshots:0\nnum_immutable_tables:0\nnum_running_flushes:0\nmemtable_flush_pending:0\ncompaction_pending:0\nnum_running_compactions:0\nnum_live_versions:5\nnum_superversion:5\nnum_background_errors:0\nflush_count:0\ncompaction_count:0\nis_bgsaving:no\nis_compacting:no\n")),(0,r.kt)("h2",{id:"server-section"},"Server section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the server section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the Kvrocks server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git_sha1"),(0,r.kt)("td",{parentName:"tr",align:null},"Git SHA1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"os"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system hosting the Kvrocks server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arch_bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Architecture (32 or 64 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcc_version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the GCC compiler used to compile the Kvrocks server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"process_id"),(0,r.kt)("td",{parentName:"tr",align:null},"PID of the server process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp_port"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/IP listen port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uptime_in_seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds since Kvrocks server start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uptime_in_days"),(0,r.kt)("td",{parentName:"tr",align:null},"Same value expressed in days")))),(0,r.kt)("h2",{id:"clients-section"},"Clients section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the clients section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connected_clients"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of client connections (excluding connections from replicas)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitor_clients"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of monitor client connections")))),(0,r.kt)("h2",{id:"memory-section"},"Memory section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the memory section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_memory_rss"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of bytes that Kvrocks allocated as seen by the operating system (a.k.a resident set size). This is the number reported by tools such as top(1) and ps(1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_memory_rss_human"),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable representation of previous value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_memory_lua"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of bytes used by the Lua engine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_memory_lua_human"),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable representation of previous value")))),(0,r.kt)("h2",{id:"stats-section"},"Stats section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the stats section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_connections_received"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of connections accepted by the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_commands_processed"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of commands processed by the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instantaneous_ops_per_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of commands processed per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_net_input_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of bytes read from the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_net_output_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of bytes written to the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instantaneous_input_kbps"),(0,r.kt)("td",{parentName:"tr",align:null},"The network's read rate per second in KB/sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instantaneous_output_kbps"),(0,r.kt)("td",{parentName:"tr",align:null},"The network's write rate per second in KB/sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_full"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of full resyncs with replicas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_partial_ok"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of accepted partial resync requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_partial_err"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of denied partial resync requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pubsub_channels"),(0,r.kt)("td",{parentName:"tr",align:null},"Global number of pub/sub channels with client subscriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pubsub_patterns"),(0,r.kt)("td",{parentName:"tr",align:null},"Global number of pub/sub pattern with client subscriptions")))),(0,r.kt)("h2",{id:"commandstats-section"},"CommandStats section"),(0,r.kt)("p",null,"The commandstats section provides statistics based on the command type, including the number of calls that reached command execution, the total CPU time consumed by these commands, the average CPU consumed per command execution."),(0,r.kt)("p",null,"For each command type, the following line is added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"cmdstat_XXX:calls=XXX,usec=XXX,usec_per_call=XXX\n")),(0,r.kt)("h2",{id:"persistence-section"},"Persistence section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the replication section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicating if the restore of the backup is on-going")))),(0,r.kt)("h2",{id:"replication-section"},"Replication section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the replication section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"role"),(0,r.kt)("td",{parentName:"tr",align:null},'Value is "master" if the instance is replica of no one, or "slave" if the instance is a replica of some master instance. Note that a replica can be master of another replica (chained replication).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_repl_offset"),(0,r.kt)("td",{parentName:"tr",align:null},"The server's current replication offset")))),(0,r.kt)("p",null,"If the instance is a replica, these additional fields are provided:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_host"),(0,r.kt)("td",{parentName:"tr",align:null},"Host or IP address of the master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_port"),(0,r.kt)("td",{parentName:"tr",align:null},"Master listening TCP port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_link_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the link (up/down)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_last_io_seconds_ago"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of seconds since the last interaction with master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master_sync_in_progress"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate the master is syncing to the replica")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slave_repl_offset"),(0,r.kt)("td",{parentName:"tr",align:null},"The replication offset of the replica instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slave_priority"),(0,r.kt)("td",{parentName:"tr",align:null},"The priority of the instance as a candidate for failover")))),(0,r.kt)("h2",{id:"cpu-section"},"CPU section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the cpu section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_cpu_sys"),(0,r.kt)("td",{parentName:"tr",align:null},"System CPU consumed by the Kvrocks server, which is the sum of system CPU consumed by all threads of the server process (main thread and background threads)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_cpu_user"),(0,r.kt)("td",{parentName:"tr",align:null},"User CPU consumed by the Kvrocks server, which is the sum of user CPU consumed by all threads of the server process (main thread and background threads)")))),(0,r.kt)("h2",{id:"keyspace-section"},"Keyspace section"),(0,r.kt)("p",null,"The keyspace section provides statistics on the main dictionary of each database. The statistics are the number of keys, and the number of keys with an expiration. Note that Kvrocks only have ",(0,r.kt)("inlineCode",{parentName:"p"},"db0")," and keys statistics wasn't manipulated in memory, so we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbsize scan")," to async scan and calculate the keys number like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Last scan db time: Sun Oct 31 17:13:14 2021\ndb0:keys=0,expires=0,avg_ttl=0,expired=0\n")),(0,r.kt)("p",null,"The line starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," means the last scan was executed on ",(0,r.kt)("inlineCode",{parentName:"p"},"Oct 31 17:13:14 2021"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"The sequence number of the RocksDB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_db_size"),(0,r.kt)("td",{parentName:"tr",align:null},"The total disk size used by Kvrocks(NOT included the WAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_db_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Max disk size can be used by Kvrocks, 0 means unlimited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent representation of used_db_size/max_db_size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disk_capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"The capacity of the disk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_disk_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Total used size of the disk(NOT Kvrocks used disk size).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used_disk_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent representation of used_disk_size/disk_capacity.")))),(0,r.kt)("h2",{id:"rocksdb-section"},"RocksDB section"),(0,r.kt)("p",null,"Here is the meaning of all fields in the rocksdb section:"),(0,r.kt)("p",null,"The rocksdb section provides statistics on each RocksDB column family and all fields were exported by RocksDB, if the field was not explained clearly enough, you can also see more information on the RocksDB wiki."),(0,r.kt)("p",null,"There are five column families on kvrocks:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Family"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to store the subkeys of the complex data structure like hash/set/list/zset/geo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to store the metadata of the complex data structure and string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zset score"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to store the mapping of zset's score to member, which would make the range by score operation faster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pubsub"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to propagate the pubsub message to replicas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"propagate"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to propagate other commands to replicas except pubsub message.")))),(0,r.kt)("p",null,"... and below statistics were column family related:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"estimate_keys","[xxx]"),(0,r.kt)("td",{parentName:"tr",align:null},"Estimate keys in the column family, may contains the tombstone and expired keys, it's a fast way to know how many keys on the column family but not precise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"block_cache_usage","[xxx]"),(0,r.kt)("td",{parentName:"tr",align:null},"Total block cache bytes used by this column family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"block_cache_pinned_usage","[xxx]"),(0,r.kt)("td",{parentName:"tr",align:null},"Total pinned bytes in this column family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index_and_filter_cache_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"Total bytes was used to cache the index and filter block.")))),(0,r.kt)("p",null,"... those statistics were the entire rocksdb side:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_mem_tables"),(0,r.kt)("td",{parentName:"tr",align:null},"Approximate size of active, unflushed immutable, and pinned immutable memtables in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cur_mem_tables"),(0,r.kt)("td",{parentName:"tr",align:null},"Approximate size of active and unflushed immutable memtable in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snapshots"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of snapshots in rocksdb.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_immutable_tables"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of the immutable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_running_flushes"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of currently running flushes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memtable_flush_pending"),(0,r.kt)("td",{parentName:"tr",align:null},"This metric returns 1 if a memtable flush is pending; otherwise it returns 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compaction_pending"),(0,r.kt)("td",{parentName:"tr",align:null},"This metric returns 1 if at least one compaction is pending; otherwise, the metric reports 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_running_compactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of currently running compactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_live_versions"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of live versions. More live versions often mean more SST files are held from being deleted, by iterators or unfinished compactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_background_errors"),(0,r.kt)("td",{parentName:"tr",align:null},"Accumulated number of background errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flush_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of flushes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compaction_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of compactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_bgsaving"),(0,r.kt)("td",{parentName:"tr",align:null},"This metric returns 1 if the bgsave was running; otherwise it returns 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_compacting"),(0,r.kt)("td",{parentName:"tr",align:null},"This metric returns 1 if the compaction was running; otherwise it returns 0.")))))}u.isMDXComponent=!0}}]);