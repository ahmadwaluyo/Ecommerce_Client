<template>
  <div class="main">
    <section id="main">
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <a href="index.html" class="list-group-item active bg-main-color">
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                    </a>
                    <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Products <span class="badge">33</span></a>
                    <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Customers <span class="badge">203</span></a>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                <div class="panel-heading bg-main-color">Latest Users</div>
                    <div class="panel-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>Eve Jackson</td>
                                    <td>evejackson@gmail.com</td>
                                    <td>Dec 13, 2016</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>johndoe@gmail.com</td>
                                    <td>Dec 14, 2016</td>
                                </tr>
                                <tr>
                                    <td>Stephanie Landon</td>
                                    <td>landon@gmail.com</td>
                                    <td>Dec 15, 2016</td>
                                </tr>
                                <tr>
                                    <td>Mike Johnson</td>
                                    <td>mikejohnson@gmail.com</td>
                                    <td>Dec 16, 2016</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Customers'
}
</script>

<style>

</style>
