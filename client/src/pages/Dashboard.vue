<template>
  <main-layout>
   
    <div class="container">
        <div class="paster">
            <h3 class="sitetitle">Paste a content to save</h3>
            <p> It's a pleasure to see you, what do you want to save on you Registr today ?</p>
            <form class="form-inline my-2 my-lg-0 mt-3">
                <input class="form-control mr-sm-2 input-paster" type="text" placeholder="http://url.com">
                <vue-tags-input
                        v-model="tag"
                        class="inline"
                        :tags="tags"
                        placeholder="Add to a collection"
                        @tags-changed="newTags => tags = newTags"
                        :autocomplete-items="filteredItems"
                />
                <a href="#" class="btn btn-primary">Add it</a>
            </form>
        </div>

    <section class="featured-posts">
        <div class="section-title">
            <h2><span>Last pins</span></h2>
        </div>
        <div class="card-columns listfeaturedtag">

            <!-- begin post -->
            <div class="card">
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail" style="background-image:url(assets/img/demopic/1.jpg);">
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">We're living some strange times</a></h2>
                            <h4 class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                            <div class="metafooter">
                                <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    <a href="author.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
                                    </span>
                                    <span class="author-meta">
                                    <span class="post-name"><a href="author.html">Steve</a></span><br/>
                                    <span class="post-date">22 July 2017</span><span class="dot"></span><span class="post-read">6 min read</span>
                                    </span>
                                    <span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end post -->

            <!-- begin post -->
            <div class="card">
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail" style="background-image:url(assets/img/demopic/2.jpg);">
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">The beauty of this world is in your heart</a></h2>
                            <h4 class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                            <div class="metafooter">
                                <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    <a href="author.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
                                    </span>
                                    <span class="author-meta">
                                    <span class="post-name"><a href="author.html">Jane</a></span><br/>
                                    <span class="post-date">22 July 2017</span><span class="dot"></span><span class="post-read">6 min read</span>
                                    </span>
                                    <span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end post -->

            <!-- begin post -->
            <div class="card">
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail" style="background-image:url(assets/img/demopic/3.jpg);">
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">Dreaming of Las Vegas Crazyness</a></h2>
                            <h4 class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                            <div class="metafooter">
                                <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    <a href="author.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
                                    </span>
                                    <span class="author-meta">
                                    <span class="post-name"><a href="author.html">Mary</a></span><br/>
                                    <span class="post-date">22 July 2017</span><span class="dot"></span><span class="post-read">6 min read</span>
                                    </span>
                                    <span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end post -->

            <!-- begin post -->
            <div class="card">
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail" style="background-image:url(assets/img/demopic/4.jpg);">
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">San Francisco at its best view in all seasons</a></h2>
                            <h4 class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                            <div class="metafooter">
                                <div class="wrapfooter">
                                    <span class="meta-footer-thumb">
                                    <a href="author.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
                                    </span>
                                    <span class="author-meta">
                                    <span class="post-name"><a href="author.html">Sal</a></span><br/>
                                    <span class="post-date">22 July 2017</span><span class="dot"></span><span class="post-read">6 min read</span>
                                    </span>
                                    <span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end post -->

        </div>
    </section>
        <!-- End Featured
        ================================================== -->

        <!-- Begin List Posts
        ================================================== -->
    <section class="recent-posts">
        <div class="section-title">
            <h2><span>Collections</span></h2>
        </div>
        <div class="card-columns listrecent">

            <!-- begin post -->
            <div class="card">
                <div class="card-block">
                    <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you know?</a></h2>
                    <h4 class="card-text">4 elements inside it.</h4>
                </div>
            </div>
            <!-- end post -->
            <!-- begin post -->
            <div class="card">
                <div class="card-block">
                    <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you know?</a></h2>
                    <h4 class="card-text">4 elements inside it.</h4>
                </div>
            </div>
            <!-- end post -->
            <!-- begin post -->
            <div class="card">
                <div class="card-block">
                    <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you know?</a></h2>
                    <h4 class="card-text">4 elements inside it.</h4>
                </div>
            </div>
            <!-- end post -->
            <!-- begin post -->
            <div class="card">
                <div class="card-block">
                    <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you know?</a></h2>
                    <h4 class="card-text">4 elements inside it.</h4>
                </div>
            </div>
            <!-- end post -->
            <!-- begin post -->
            <div class="card">
                <div class="card-block">
                    <h2 class="card-title"><a href="post.html">Autumn doesn't have to be nostalgic, you know?</a></h2>
                    <h4 class="card-text">4 elements inside it.</h4>
                </div>
            </div>
            <!-- end post -->

        </div>
    </section>
    </div>
  </main-layout>
</template>
<style>
    .inline{
        font-size: 1rem;
        height: 42px;
        line-height: 1.25;
        color: #464a4c;
        width: 30%;
        background-color: #fff;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: .25rem;
    }
    .ti-input{
        border: none!important;
        height: 38px
    }
    .ti-tag{
         background-color: #36c7ca!important;
    }
    .input-paster{
        height: 42px;
    }
    .paster{
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        padding: 32px 24px;
        margin: 164px 0
    }
    .paster a{
       margin-left: 16px;
        background: #36c7ca!important;
        color: #fff;
    }
    .paster a:hover{
        color: #fff;
    }
    .paster input{width: 50%!important}
    .paster h3{
        margin-bottom: 24px;
    }
    .paster p{
        margin-bottom: 24px!important;
    }
    .sitetitle{
        margin-bottom: 8px!important;
    }
</style>
<script>
  import MainLayout from '../layouts/Main.vue'
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    components: {
      MainLayout,
        VueTagsInput
    },
      data() {
          return {
              tag: '',
              tags: [],
              autocompleteItems: [{
                  text: 'Spain',
              }, {
                  text: 'France',
              }, {
                  text: 'USA',
              }, {
                  text: 'Germany',
              }, {
                  text: 'China',
              }],
          };
      },
      computed: {
          filteredItems() {
              return this.autocompleteItems.filter(i => {
                  return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
              });
          },
      },
  }
</script>
