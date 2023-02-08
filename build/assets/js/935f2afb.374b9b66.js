"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Getting started","href":"/build/docs/getting-started","docId":"getting-started"},{"type":"link","label":"Namespace","href":"/build/docs/namespace","docId":"namespace"},{"type":"link","label":"Cluster","href":"/build/docs/cluster","docId":"cluster"},{"type":"link","label":"Replication","href":"/build/docs/replication","docId":"replication"},{"type":"category","label":"Operation","collapsed":false,"items":[{"type":"link","label":"Backup","href":"/build/docs/backup","docId":"backup"},{"type":"link","label":"Kvrocks Exporter","href":"/build/docs/kvrocks-exporter","docId":"kvrocks-exporter"}],"collapsible":true,"href":"/build/docs/category/operation"},{"type":"category","label":"References","collapsed":false,"items":[{"type":"link","label":"Supported commands","href":"/build/docs/supported-commands","docId":"supported-commands"},{"type":"link","label":"INFO sections","href":"/build/docs/info-sections","docId":"info-sections"}],"collapsible":true,"href":"/build/docs/category/references"}]},"docs":{"backup":{"id":"backup","title":"Backup","description":"Full backup","sidebar":"docs"},"cluster":{"id":"cluster","title":"Cluster","description":"Before releasing the cluster mode of Kvrocks, we usually used the pre-sharding way to scale out the capacity like sharding with Twemproxy, and used Redis Sentinel to guarantee the availability. Although it works well in most scenes since the capacity of Kvrocks is far larger than Redis, it\u2019s still trivial to scale-out in-flight, so we decided to implement the cluster mode to make it easier.","sidebar":"docs"},"getting-started":{"id":"getting-started","title":"Getting started","description":"Run Kvrocks with Docker","sidebar":"docs"},"info-sections":{"id":"info-sections","title":"INFO sections","description":"The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.","sidebar":"docs"},"kvrocks-exporter":{"id":"kvrocks-exporter","title":"Kvrocks Exporter","description":"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands.","sidebar":"docs"},"namespace":{"id":"namespace","title":"Namespace","description":"Like the Redis database, Kvrocks uses the namespace to isolate the data between users. But unlike Redis, each namespace has its own password. The data would be stored in the default namespace when using requirepass. The namespace would have no effect when the cluster mode was enabled like the Redis DB.","sidebar":"docs"},"replication":{"id":"replication","title":"Replication","description":"An instance is turned into a slave role when SLAVEOF cmd is received.","sidebar":"docs"},"supported-commands":{"id":"supported-commands","title":"Supported commands","description":"String commands","sidebar":"docs"}}}')}}]);