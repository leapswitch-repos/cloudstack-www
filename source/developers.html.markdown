---
title: Developer Resources for Apache CloudStack
---

<div class="row">

<div class="col-lg-12">

<div class="page-header">

<h1 id="indicators">Developer Resources for Apache CloudStack</h1>

</div>

</div>

</div>

<div class="row">

<div class="col-lg-8">

<h2>Contributing as a Non-Committer</h2>

<p>If you're a committer on an Apache project, it means that you can commit directly to the project's repository. For instance, with Apache CloudStack committers are allowed to directly push commits into the git repository.</p>

<p>Non-committers, however, have to submit patches for review. Apache CloudStack accepts <a href="https://github.com" target="_blank">GitHub</a> pull requests. If you are new to Git and GitHub, check these two links:</p>
<p>
<ul>
  <li><a href="https://try.github.io/levels/1/challenges/1" target="_blank">GitHub 15 minutes </a>tutorial</li>
  <li><a href="https://help.github.com/articles/creating-a-pull-request/" target="_blank">Creating </a>Pull Requests</li>
</ul>
</p>

<p>Apache CloudStack has a read-only mirror on <a href="https://github.com/apache/cloudstack" target="_blank">GitHub</a> that is kept in sync with the 
canonical Git repo maintained by the Apache Software Foundation. Submitting GitHub pull requests is the easiest way to get your contribution upstream. 
For detailed instructions see the link below:<br />
<a href="https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md" target="_blank">GitHub Contribution Guidelines</a></p>

<h3>Submitting a patch</h3>

<p>While we encourage you to submit your contribution through GitHub pull requests, you can also attach a patch in a JIRA ticket. For the purpose of these instructions, we'll assume that you already have a system with <a href="http://git-scm.com/" target="_blank">Git</a> and have found a bug to fix or have a feature that you'd like to submit, and you're willing to contribute that code or documentation under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache License 2.0</a>.</p>

<p>Further, if you're fixing a bug we'll assume that you've either filed a bug report (where you will attach your patch) or are submitting a fix for a known bug. If you find a bug and would like to fix it, that's awesome! Please be sure to file the bug too, though.</p>

<p>If you want to add a feature, you should bring it up for discussion on the <a href="mailto:dev@cloudstack.apache.org">dev@cloudstack.apache.org</a> mailing list before implementing it. This ensures that it meshes with the plans that other contributors have for Apache CloudStack, and that you're not doing redundant work. Other developers may also have ideas for the feature or suggestions that will help you land the feature without having to re-do the work. More information about our mailing lists can be found <a href="/mailing-lists.html">here</a>.</p>

<p>In short, communication is a vital part of making a contribution to an Apache project.</p>

<h3>Getting Started</h3>

<h4>Fork the code</h4>

<p>In your browser, navigate to: <a href="https://github.com/apache/cloudstack">https://github.com/apache/cloudstack</a>.</p>

<p>Fork the repository by clicking on the 'Fork' button on the top right hand side.  The fork will happen and you will be taken to your own
fork of the repository. Copy the Git repository URL by clicking on the clipboard next to the URL on the right hand side of the page under '<b>HTTPS</b> clone URL'.
You will paste this URL when doing the following <code>git clone</code> command.</p>

On your computer, follow these steps to setup a local repository for working on ACS:

<pre>
$ git clone https://github.com/YOUR_ACCOUNT/cloudstack.git
$ cd cloudstack
$ git remote add upstream https://github.com/apache/cloudstack.git
$ git checkout main
$ git fetch upstream
$ git rebase upstream/main
</pre>

<h4>Making Changes</h4>

<p>It is important that you create a new branch to make changes on and that you do not change the 
<code>main</code> branch (other than to rebase in changes from <code>upstream/main</code>).  In this example I will assume you will be making your changes 
to a branch called <code>feature_x</code>. This <code>feature_x</code> branch will be created on your local repository and will be pushed to your
forked repository on GitHub. Once this branch is on your fork you will create a Pull Request for the changes to be added to the ACS project.</p>

<p>It is best practice to create a new branch each time you want to contribute to the project and only track the changes for that pull request in this branch.</p>

<pre>
$ git checkout -b feature_x
   (make your changes)
$ git status
$ git add .
$ git commit -a -m "descriptive commit message for your changes"
</pre>

<blockquote>The <code>-b</code> specifies that you want to create a new branch called <code>feature_x</code>.  You only specify <code>-b</code> the first time you 
checkout because you are creating a new branch.  Once the <code>feature_x</code> branch exists, you can later switch to it with only <code>git checkout feature_x</code>.</blockquote>

<h4>Rebase <code>feature_x</code> to include updates from <code>upstream/main</code></h4>

<p>It is important that you maintain an up-to-date <code>main</code> branch in your local repository.  This is done by rebasing in the code 
changes from <code>upstream/main</code> (the official ACS project repository) into your local repository.  You will want to do this before you start 
working on a feature as well as right before you submit your changes as a pull request. We recommend you do this process periodically while you work to make 
sure you are working off the most recent project code.</p>

<p>This process will do the following:</p>

<ol>
  <li>Checkout your local <code>main</code> branch;</li>
  <li>Synchronize your local <code>main</code> branch with the <code>upstream/main</code> so you have all the latest changes from the project;</li>
  <li>Rebase the latest project code into your <code>feature_x</code> branch so it is up-to-date with the upstream code.</li>
</ol>

<pre>
$ git checkout main
$ git fetch upstream
$ git rebase upstream/main
$ git checkout feature_x
$ git rebase main
</pre>

<blockquote>Now your <code>feature_x</code> branch is up-to-date with all the code in <code>upstream/main</code>.</blockquote>

<h4>Make a GitHub pull request to contribute your changes</h4>

<p>When you are happy with your changes and you are ready to contribute them, you will create a Pull Request on GitHub to do so.
This is done by pushing your local changes to your forked repository (default remote name is <code>origin</code>) and then initiating a pull request on GitHub.</p>

<p>Please include JIRA ID or GitHub ID, detailed information about the bug/feature, what all tests are executed, how the reviewer can test this
feature etc. In case of UI PRs, a screenshot is preferred.</p>

<blockquote><b>IMPORTANT:</b>Make sure you have rebased your <code>feature_x</code> branch to include the latest code from <code>upstream/main</code> <b>before</b>
you do this.</blockquote>

<pre>
$ git push origin main
$ git push origin feature_x
</pre>

<p>Now that the <code>feature_x</code> branch has been pushed to your GitHub repository, you can initiate the pull request.</p>

<p>To initiate the pull request, do the following:</p>

<ol>
<li>In your browser, navigate to your forked repository: <b>https://github.com/YOUR_ACCOUNT/cloudstack</b>;</li>
<li>Click the new button called '<b>Compare & pull request</b>' that showed up just above the main area in your forked repository;</li>
<li>Validate the pull request will be into the upstream <code>main</code> and will be from your <code>feature_x</code> branch;</li>
<li>Enter a detailed description of the work you have done and then click '<b>Send pull request</b>'.</li>
</ol>

<p>If you are requested to make modifications to your proposed changes, make the changes locally on your <code>feature_x</code> branch, re-push
the <code>feature_x</code> branch to your fork. The existing pull request should automatically pick up the change and update accordingly.</p>

<h4>Cleaning up after a successful pull request</h4>

<p>Once the <code>feature_x</code> branch has been committed into the <code>upstream/main</code> branch, your local <code>feature_x</code> branch
and the <code>origin/feature_x</code> branch are no longer needed. If you want to make additional changes, restart the process with a new branch.</p>

<blockquote><b>IMPORTANT:</b>Make sure that your changes are in <code>upstream/main</code>before you delete your <code>feature_x</code>
and <code>origin/feature_x</code> branches!</blockquote>

<p>You can delete these deprecated branches with the following:</p>

<pre>
$ git checkout main
$ git branch -D feature_x
$ git push origin :feature_x
</pre>

<h3>Further Reading</h3>

<p>You might want to peruse the <a href="http://www.apache.org/foundation/getinvolved.html" target="_blank">Get Involved</a> page on Apache.org. 
Please, respect the original style of the CloudStack code, and ensure that you're using spaces rather than tabs, and your code have Unix line 
endings (LF) rather than Windows-type line endings (CRLF).</p>

</div>

<div class="col-lg-4">


<div class="list-group">

<div class="list-group-item active">Resources</div>

<a href="https://github.com/apache/cloudstack/" class="list-group-item" target="_blank">Public repository (on github)</a>

<a hread="https://github.com/apache/cloudstack/blob/main/CONTRIBUTING.md" class="list-group-item" target="_blank">Contribution Guidelines</a>

<a href="https://builds.apache.org/view/A-D/view/Cloudstack/" class="list-group-item" target="_blank">ASF Jenkins</a>

<a href="http://jenkins.buildacloud.org/" class="list-group-item" target="_blank">CloudStack Jenkins</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Development+101" class="list-group-item" target="_blank">CloudStack Development 101</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Setting+up+CloudStack+Development+Environment" class="list-group-item" target="_blank">Setting up a Dev Environment</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Coding+conventions" class="list-group-item" target="_blank">Code Conventions</a>

<a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Testing" class="list-group-item" target="_blank">Testing CloudStack</a>

<a href="https://issues.apache.org/jira/browse/CLOUDSTACK" class="list-group-item" target="_blank">Obsolete Jira issue tracker</a>

</div>



<div class="panel panel-success">

<div class="panel-heading">
                
<h3 class="panel-title">CloudStack Git Repositories</h3>
              
</div>
              
<div class="panel-body">
                
<p>The git repositories are hosted on Apache infrastructure, and can be found here:</p>

<ul>
<li><a href="https://gitbox.apache.org/repos/asf/cloudstack.git" target="_blank">Apache CloudStack source code</a></li>
<li><a href="https://gitbox.apache.org/repos/asf/cloudstack-cloudmonkey.git" target="_blank">Apache CloudStack Cloudmonkey source code</a></li>
<li><a href="https://github.com/apache/cloudstack-documentation" target="_blank">Documentation</a></li>
<li><a href="https://github.com/apache/cloudstack-www" target="_blank">Apache CloudStack Website</a></li>
</ul>

<p>To get the most recent source for Apache CloudStack, use:</p>

<pre>
git clone https://github.com/apache/cloudstack.git
</pre>
or 
<pre>
git clone https://gitbox.apache.org/repos/asf/cloudstack.git
</pre>

<p>Similarly, clone the cloudstack-cloudmonkey repository or the other repositories to get access to the most recent source of all CloudStack subprojects.</p>

<p>For projects related to Apache CloudStack but not under ASF governance, see the <a href="https://github.com/cloudstack-extras" target="_blank">CloudStack-extras repositories on GitHub</a>.</p>
              
</div>
            
</div>


</div>

</div>

