import React from 'react'
import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI powered platform
      </p>

      <form action=""
        onSubmit={handleSubmit}
        className='mt-10 glassmorphism flex w-full flex-col gap-7 max-w-full'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI prompt
          </span>

          <textarea
            name=""
            id=""
            value={post.prompt}
            onChange={(e) => setPost(
              {
                ...post, prompt: e.target.value
              }
            )
            }
            placeholder='Write your prompt here...'
            required
            className='form_textarea bg-white'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {` `}
            <span className='font-normal'>(#product, #webdevelopment, #idea)</span>
          </span>

          <input
            name=""
            id=""
            value={post.tag}
            onChange={(e) => setPost({
                ...post, tag: e.target.value
            })
            }
            placeholder='#tag'
            required
            className='form_input bg-white'
          />
        </label>

        <div className="flex-end mbb-5 mx-3 gap-4">
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button type="submit" disabled = {submitting} className='bg-orange-400 rounded-full px-5 py-1.5 text-sm text-white'>
            {submitting ? `${type}...` : type}
          </button>
        </div>

      </form>

    </section>
  )
}

export default Form
