const questions = [
    {
      question: "Which sign says What?",
      options: [
        { 
          video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true', 
          correct: false 
        },
        { 
          video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
          correct: false 
        },
        { 
          video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
          correct: true 
        },
        { 
          video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true', 
          correct: false 
        }
      ],
    },
    {
        question: "Which sign says Who?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true', 
            correct: true 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true', 
            correct: false 
          }
        ],
      },
      {
        question: "Which sign says Why?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: true 
          }
        ],
      },
      {
        question: "Which sign says Where?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: true 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says How old are you?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F136be3a00e8943a68a786b15fa63fff6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=136be3a00e8943a68a786b15fa63fff6&alt=media&optimized=true', 
            correct: true 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says When?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F136be3a00e8943a68a786b15fa63fff6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=136be3a00e8943a68a786b15fa63fff6&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says How are you?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says What are you doing?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says How?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says Where are you from?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says Do you understand?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1af55d1880b646de85d1f9fab624541e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1af55d1880b646de85d1f9fab624541e&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F64a4f65b9877436cbecb3ec5d804a889%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=64a4f65b9877436cbecb3ec5d804a889&alt=media&optimized=true', 
            correct: false 
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says Can you help me?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F64a4f65b9877436cbecb3ec5d804a889%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=64a4f65b9877436cbecb3ec5d804a889&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1af55d1880b646de85d1f9fab624541e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1af55d1880b646de85d1f9fab624541e&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says What time is it?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc7bb3d9a5dd54ba5875b95c91b381b3d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c7bb3d9a5dd54ba5875b95c91b381b3d&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says What is your name?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says Where are you going?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says Where do you live?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Which sign says What do you do (job, school)?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd7d7ea0c45874ab5ad0956e6e43d443c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d7d7ea0c45874ab5ad0956e6e43d443c&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
      {
        question: "Are you married or single?",
        options: [
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F69ab6ce319b04f3982eedb55c99fb8dd%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=69ab6ce319b04f3982eedb55c99fb8dd&alt=media&optimized=true', 
            correct: true
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: false
          },
          { 
            video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: false
          }
        ],
      },
];

// Configuration constants
const TOTAL_QUESTIONS_TO_SHOW = 10;
const TOTAL_QUESTIONS_IN_POOL = 18; 

// Quiz state
const quizState = {
  currentQuestionIndex: 0,
  selectedOption: null,
  progressStatus: [],
  score: [],
  shuffledQuestions: [],
  currentQuestionsSet: [] // Will hold either shuffled or full question set
};

// DOM Elements
const domElements = {
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('video-options-container'),
  nextBtn: document.getElementById('next-btn'),
  finalAnswerBtn: document.getElementById('final-answer-btn'),
  modal: document.getElementById('quiz-modal'),
  backButton: document.querySelector('.back-button'),
  tryAgainButton: document.querySelector('.try-again-button'),
  progressBar: document.getElementById('progress-bar'),
  quizScore: document.getElementById('quiz-score')
};

/**
 * Initializes the quiz by:
 * 1. Setting up the progress bar
 * 2. Shuffling and selecting questions
 * 3. Loading the first question
 */
function initializeQuiz() {
  initializeProgressBar();
  shuffleAndSelectQuestions();
  loadQuestion();
}

/**
 * Creates and initializes the progress bar segments
 */
function initializeProgressBar() {
  domElements.progressBar.innerHTML = '';
  quizState.progressStatus = new Array(TOTAL_QUESTIONS_TO_SHOW).fill(null);
  quizState.score = new Array(TOTAL_QUESTIONS_TO_SHOW).fill(false);
  
  for (let i = 0; i < TOTAL_QUESTIONS_TO_SHOW; i++) {
    const segment = document.createElement('div');
    segment.className = 'progress-segment';
    domElements.progressBar.appendChild(segment);
  }
}

/**
 * Shuffles the questions and selects a subset
 */
function shuffleAndSelectQuestions() {
  // Create a copy of the original questions array
  const shuffled = [...questions];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Select first N questions
  quizState.currentQuestionsSet = shuffled.slice(0, TOTAL_QUESTIONS_TO_SHOW);
  
  // Shuffle options for each question
  quizState.currentQuestionsSet.forEach(question => {
    shuffleArray(question.options);
  });
}

/**
 * Shuffles an array in place using Fisher-Yates algorithm
 * @param {Array} array - The array to shuffle
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Loads the current question into the UI
 */
function loadQuestion() {
  const question = quizState.currentQuestionsSet[quizState.currentQuestionIndex];
  
  // Reset UI state
  domElements.questionText.textContent = question.question;
  domElements.optionsContainer.innerHTML = '';
  domElements.nextBtn.style.display = 'none';
  domElements.finalAnswerBtn.style.display = 'none';
  quizState.selectedOption = null;
  
  // Create option elements
  question.options.forEach(option => {
    const optionElement = createOptionElement(option);
    domElements.optionsContainer.appendChild(optionElement);
  });
  
  updateProgressBar();
}

/**
 * Creates a video option element
 * @param {Object} option - The option data
 * @returns {HTMLElement} The created option element
 */
function createOptionElement(option) {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'video-option';
  optionDiv.innerHTML = `<video controls><source src="${option.video}" type="video/mp4"></video>`;
  
  optionDiv.addEventListener('click', () => {
    if (!optionDiv.classList.contains('selected')) {
      // Deselect all other options
      document.querySelectorAll('.video-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Select current option
      optionDiv.classList.add('selected');
      domElements.finalAnswerBtn.style.display = 'block';
      quizState.selectedOption = { 
        element: optionDiv, 
        correct: option.correct 
      };
    }
  });
  
  return optionDiv;
}

/**
 * Updates the progress bar to reflect current state
 */
function updateProgressBar() {
  const segments = document.querySelectorAll('.progress-segment');
  segments.forEach((segment, index) => {
    segment.classList.remove('correct', 'incorrect');
    if (quizState.progressStatus[index] !== null) {
      segment.classList.add(quizState.progressStatus[index] ? 'correct' : 'incorrect');
    }
  });
}

/**
 * Handles final answer confirmation
 */
function confirmFinalAnswer() {
  if (!quizState.selectedOption) return;
  
  const { element, correct } = quizState.selectedOption;
  
  // Update UI for selected answer
  element.classList.remove('selected');
  element.classList.add(correct ? 'correct' : 'incorrect');
  
  // Update quiz state
  quizState.progressStatus[quizState.currentQuestionIndex] = correct;
  quizState.score[quizState.currentQuestionIndex] = correct;
  
  // Disable further selection
  document.querySelectorAll('.video-option').forEach(opt => {
    opt.style.pointerEvents = 'none';
  });

  // Show feedback
  showFeedback(correct);
  
  updateProgressBar();
  domElements.finalAnswerBtn.style.display = 'none';
  domElements.nextBtn.style.display = 'block';
}

/**
 * Shows feedback message for the answer
 * @param {boolean} isCorrect - Whether the answer was correct
 */
function showFeedback(isCorrect) {
  // Remove existing feedback
  const existingFeedback = document.getElementById('feedbackText');
  if (existingFeedback) existingFeedback.remove();

  // Create new feedback
  const feedbackText = document.createElement('div');
  feedbackText.id = 'feedbackText';
  feedbackText.textContent = isCorrect 
    ? (Math.random() < 0.5 ? 'Correct! Good job!' : 'Correct Answer!') 
    : 'Wrong answer, sorry!';
  feedbackText.className = isCorrect ? 'feedback-correct' : 'feedback-wrong';
  domElements.questionText.parentNode.insertBefore(feedbackText, domElements.questionText.nextSibling);
}

/**
 * Advances to the next question or shows final results
 */
function nextQuestion() {
  clearFeedback();
  resetOptionStyles();
  
  quizState.currentQuestionIndex++;
  if (quizState.currentQuestionIndex < TOTAL_QUESTIONS_TO_SHOW) {
    loadQuestion();
  } else {
    showFinalResults();
  }
  
  domElements.finalAnswerBtn.style.display = 'none';
  domElements.nextBtn.style.display = 'none';
}

/**
 * Clears any existing feedback messages
 */
function clearFeedback() {
  const existingFeedback = document.getElementById('feedbackText');
  if (existingFeedback) existingFeedback.remove();
}

/**
 * Resets option styles for the next question
 */
function resetOptionStyles() {
  document.querySelectorAll('.video-option').forEach(opt => {
    opt.style.pointerEvents = 'auto';
    opt.classList.remove('correct', 'incorrect', 'selected');
  });
}

/**
 * Calculates the final score
 * @returns {number} The number of correct answers
 */
function calculateScore() {
  return quizState.score.filter(Boolean).length;
}

/**
 * Shows the final results modal
 */
function showFinalResults() {
  domElements.quizScore.textContent = calculateScore();
  domElements.modal.style.display = 'flex';
}

/**
 * Resets the quiz for a new attempt
 */
function resetQuiz() {
  quizState.currentQuestionIndex = 0;
  quizState.score = new Array(TOTAL_QUESTIONS_TO_SHOW).fill(false);
  quizState.progressStatus = new Array(TOTAL_QUESTIONS_TO_SHOW).fill(null);
  
  shuffleAndSelectQuestions();
  initializeProgressBar();
  loadQuestion();
}

// Event Listeners
domElements.finalAnswerBtn.addEventListener('click', confirmFinalAnswer);
domElements.nextBtn.addEventListener('click', nextQuestion);

domElements.backButton.addEventListener('click', () => {
  domElements.modal.style.display = 'none';
  window.history.back();
});

domElements.tryAgainButton.addEventListener('click', () => {
  domElements.modal.style.display = 'none';
  resetQuiz();
});

domElements.modal.addEventListener('click', (e) => {
  if (e.target === domElements.modal) {
    domElements.modal.style.display = 'none';
  }
});

// Initialize the quiz
initializeQuiz();