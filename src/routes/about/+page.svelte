<script lang="ts">
	import type { AboutData } from "../../api/client";
	import ExplodingList from "../../components/ExplodingList.svelte";

  import Image from "../../components/Image.svelte";
  import SimpleCard from "../../components/SimpleCard.svelte";

  export let data: AboutData
</script>

<svelte:head>
  <title>Grayson's Portfolio | About</title>
</svelte:head>

<section class="container">
  <article class="intro">
    <div class="img">
      <Image clazz="headshot" src={data.headshot} alt="headshot of grayson"/>
      <Image clazz="headshotbg" src={data.headshotbg} alt="headshot of grayson"/>
    </div>
    <div class="content">
      <h3>
        I'm Grayson,
      </h3>
      <p>
        {@html data.description}
      </p>
    </div>
  </article>

  <article>
    <div class="jobhistory">
			<h2>Current Roles</h2>
			<div class="current">
				{#each data.history.filter((job) => job.current) as job, i}
					<SimpleCard>
						<div class="job">
							<div class="job-logo" style="--shine-delay: {i * 500}ms">
								<Image src={job.logo} alt={job.title} />
							</div>
							<div class="job-content">
								<h4 class="job-years">{job.years}</h4>
								<h3>{job.title}</h3>
								<p>{job.content}</p>
							</div>
						</div>
					</SimpleCard>
				{/each}
			</div>

      <h2>A brief history</h2>

      {#each data.history.filter((job) => !job.current) as job, i}
        <SimpleCard>
          <div class="job">
            <div class="job-logo" style="--shine-delay: {(i + 1) * 500}ms">
              <Image src={job.logo} alt={job.title} />
            </div>
            <div class="job-content">
              <h4 class="job-years">{job.years}</h4>
              <h3>{job.title}</h3>
              <p>{job.content}</p>
            </div>
          </div>
        </SimpleCard>
      {/each}
    </div>
  </article>

  <article>
    <div class="skills">
      <h2>Skills</h2>
      <ExplodingList items={data.skills} />
    </div>
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-bottom: 8rem;
    font-size: 12px;
  }

  .img, .img :global(img) {
    position: relative;
    width: 100%;
    max-width: 120rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: var(--border-radius);
    overflow: hidden;
    isolation: isolate;
  }

  .img {
    background-color: var(--color-surface);
  }

  .img::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
  }

  .img :global(.headshot) {
    position: absolute;
    z-index: 3;
  }

  .img :global(.headshotbg) {
    position: absolute;
    z-index: -1;
    transform: scale(1.05);
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 30rem;
    margin-inline: auto;
    align-items: center;
    --border-radius: 1em;
  }

  .intro {
      display: flex;
      flex-direction: column;
  }

  h2 {
    color: var(--color-on-surface);
    font-size: 2.5rem;
    font-weight: 900;
    font-stretch: 100%;
  }

  h3 {
    color: var(--color-on-surface);
    font-size: 1.25rem;
    font-weight: 900;
    font-stretch: 100%;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
    opacity: 0.7;
    line-height: 1.75;
  }

  .jobhistory {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

	.jobhistory .current {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

  .job {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: normal;
  }

  .job-logo {
    flex-shrink: 0;
    height: 5rem;
    width: 5rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: var(--color-surface);
    display: flex;
    align-items: center;
    isolation: isolate;
    position: relative;
  }

  .job-logo :global(img) {
    aspect-ratio: 1;
    object-fit: contain;
  }

  .job-logo::after {
    content: '';
    position: absolute;
    top: 0px;
    left: -300px;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: linear-gradient(
      to right, 
      rgba(0,0,255,0.01), 
      rgba(0,0,255,0.25),
      white, 
      rgba(0,255,155,0.25),
      rgba(0,0,255,0.01)
    );
    mix-blend-mode: overlay;
    transform: skewX(-30deg);
    animation: shine 10s ease-in-out infinite;
    animation-delay: var(--shine-delay, 0ms);
  }

  .job-content {
    flex-grow: 1;
  }

  .job-years {
    opacity: 0.7;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (min-width: 1200px) {
    section {
      gap: 16rem;
      padding-bottom: 16rem;
    }

    h2 {
      font-size: 3.5rem;
      font-weight: 900;
      font-stretch: 100%;
    }

    h3 {
      font-size: 2.5rem;
      font-weight: 900;
      font-stretch: 100%;
    }

    p {
      font-size: 1.1rem;
      margin-top: 1rem;
      font-weight: 450;
      opacity: 0.7;
      line-height: 1.75;
    }

    article {
      flex-direction: row;
      max-width: 80rem;
      gap: 4rem;
    }

		.intro {
				display: grid;
				grid-template-columns: 33% 1fr;
		}

		.jobhistory .current {
				display: grid;
				grid-template-columns: 1fr 1fr;
		}

    p {
      font-size: 1.2rem;
    }

    .job {
      flex-direction: row;
      gap: 2rem;
    }

    .job-logo {
      height: 10rem;
      width: 10rem;
    }

    .img, .img :global(img) {
      width: 120rem;
      max-width: 100%;
    }
  }

  @keyframes shine {
    from {
      left: -300px;
    }
    
    20% {
      left: 300px;
    }
    
    to {
      left: 300px;
    }
  }
</style>