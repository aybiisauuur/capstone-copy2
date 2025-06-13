const questions = [
    // Letters N-Z and Numbers 17-1 million
    // Letters 
    {
        question: "Which video shows: Letter N?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc650704d906a47629b5319f1d8bcbb92%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c650704d906a47629b5319f1d8bcbb92&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter O?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc650704d906a47629b5319f1d8bcbb92%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c650704d906a47629b5319f1d8bcbb92&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter P?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc650704d906a47629b5319f1d8bcbb92%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c650704d906a47629b5319f1d8bcbb92&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows: Letter Q?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4b6e7e1bcee8420bbf510c7861ce36e1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4b6e7e1bcee8420bbf510c7861ce36e1&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F76e1875707204d78bd83e663dc72356a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=76e1875707204d78bd83e663dc72356a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter R?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F17fd031f360441939b33a4e72139a8fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=17fd031f360441939b33a4e72139a8fe&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F76e1875707204d78bd83e663dc72356a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=76e1875707204d78bd83e663dc72356a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter S?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F17fd031f360441939b33a4e72139a8fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=17fd031f360441939b33a4e72139a8fe&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5e99509e621f453cbc99f84d2cc8d0f3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5e99509e621f453cbc99f84d2cc8d0f3&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter T?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter U?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F471cdb61b53a41b090adbacfca397eea%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=471cdb61b53a41b090adbacfca397eea&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows: Letter V?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa0bf0d4590df4634afb7ae76bcea3e16%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a0bf0d4590df4634afb7ae76bcea3e16&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F471cdb61b53a41b090adbacfca397eea%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=471cdb61b53a41b090adbacfca397eea&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter W?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F471cdb61b53a41b090adbacfca397eea%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=471cdb61b53a41b090adbacfca397eea&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter X?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F132bfc4a83dc4173bee3c7658289d87f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=132bfc4a83dc4173bee3c7658289d87f&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows: Letter Y?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F132bfc4a83dc4173bee3c7658289d87f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=132bfc4a83dc4173bee3c7658289d87f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3b72a4324ea4828b05ab836bd08eead%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3b72a4324ea4828b05ab836bd08eead&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows: Letter Z?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd4f7fae673114c26aa27b18730e530a0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d4f7fae673114c26aa27b18730e530a0&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3b72a4324ea4828b05ab836bd08eead%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3b72a4324ea4828b05ab836bd08eead&alt=media&optimized=true', 
            correct: false }
            ],
    },
    // numbers 17- 1 mill
    {
        question: "Which video shows the number 17?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F376892c624184e65a4d75cddda95aed8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=376892c624184e65a4d75cddda95aed8&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3b18a70499664f8e96b5d6c852f6632f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3b18a70499664f8e96b5d6c852f6632f&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 18?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffa1a21fd83d54e1e8dd5b0e9a0df1efb%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fa1a21fd83d54e1e8dd5b0e9a0df1efb&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F376892c624184e65a4d75cddda95aed8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=376892c624184e65a4d75cddda95aed8&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3b18a70499664f8e96b5d6c852f6632f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3b18a70499664f8e96b5d6c852f6632f&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows the number 19?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7052374dd9c74aa2bb8092acf3fdfa7e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7052374dd9c74aa2bb8092acf3fdfa7e&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3b18a70499664f8e96b5d6c852f6632f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3b18a70499664f8e96b5d6c852f6632f&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 20?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff67c038bbf3c4ee38b4bddf7f1a1503e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f67c038bbf3c4ee38b4bddf7f1a1503e&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 30?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff67c038bbf3c4ee38b4bddf7f1a1503e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f67c038bbf3c4ee38b4bddf7f1a1503e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffb908eae717c4a56ab677bc582718106%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fb908eae717c4a56ab677bc582718106&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows the number 40?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F97e52d1e50e747c4857ba2218f97e774%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=97e52d1e50e747c4857ba2218f97e774&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd66d7209be94c40b3f79c25d106d082%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd66d7209be94c40b3f79c25d106d082&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fefc74a7e5ce34e87ad2276e95a0735d6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=efc74a7e5ce34e87ad2276e95a0735d6&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 50?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe47908419cfd4fd0a84e9f55e1eb8e8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e47908419cfd4fd0a84e9f55e1eb8e8c&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffc32d4a30ce94fc3910da4ab6acca607%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fc32d4a30ce94fc3910da4ab6acca607&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3d8880ab1fa4b538b5730fafee406d3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3d8880ab1fa4b538b5730fafee406d3&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28609d7020ff48428fbe89ef85a98fe0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28609d7020ff48428fbe89ef85a98fe0&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 60?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5089f4e1f0d5480d96eb46ad11c1dabc%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5089f4e1f0d5480d96eb46ad11c1dabc&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7052374dd9c74aa2bb8092acf3fdfa7e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7052374dd9c74aa2bb8092acf3fdfa7e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28609d7020ff48428fbe89ef85a98fe0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28609d7020ff48428fbe89ef85a98fe0&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video shows the number 70?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F376892c624184e65a4d75cddda95aed8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=376892c624184e65a4d75cddda95aed8&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4653b03f4a45412dbc9b9615cb983c6c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4653b03f4a45412dbc9b9615cb983c6c&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 80?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feb47d20963f440fdae2ddf1cc6648e75%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eb47d20963f440fdae2ddf1cc6648e75&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffb908eae717c4a56ab677bc582718106%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fb908eae717c4a56ab677bc582718106&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffa1a21fd83d54e1e8dd5b0e9a0df1efb%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fa1a21fd83d54e1e8dd5b0e9a0df1efb&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3b18a70499664f8e96b5d6c852f6632f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3b18a70499664f8e96b5d6c852f6632f&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 90?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5089f4e1f0d5480d96eb46ad11c1dabc%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5089f4e1f0d5480d96eb46ad11c1dabc&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F2a24363806854b74a52ab4c7450b4752%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=2a24363806854b74a52ab4c7450b4752&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7052374dd9c74aa2bb8092acf3fdfa7e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7052374dd9c74aa2bb8092acf3fdfa7e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 100?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 1000?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video shows the number 1 000 000 (1 million)?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true', 
            correct: false }
            ],
    },
];

let currentQuestion = 0;
let selectedOption = null;
let progressStatus = [];
let score = []; // Added score array
let shuffledQuestions = [];

const questionText = document.getElementById('question-text');
const quizContainer = document.getElementById('quiz-container');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const optionsContainer = document.getElementById('video-options-container');
const nextBtn = document.getElementById('next-btn');
const finalAnswerBtn = document.getElementById('final-answer-btn');
const modal = document.getElementById('quiz-modal');
const backButton = document.querySelector('.back-button');
const tryAgainButton = document.querySelector('.try-again-button');

function init() {
    // Only start the quiz if all elements exist
    startQuiz();

    nextBtn.addEventListener('click', nextQuestion);
}

// Start a new quiz
function startQuiz() {
    loadingElement.style.display = 'block';
    quizContainer.style.display = 'block';

    setTimeout(() => {
        // Shuffle all questions and select first 15
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);

        currentQuestion = 0;
        score = new Array(shuffledQuestions.length).fill(false);
        userAnswers = new Array(shuffledQuestions.length).fill(null);
        answered = false;

        initializeProgressBar();

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion();
    }, 1500);
}

function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.innerHTML = '';
    // Use shuffledQuestions.length instead of questions.length
    shuffledQuestions.forEach(() => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        progressBar.appendChild(segment);
    });
    progressStatus = new Array(shuffledQuestions.length).fill(null);
    score = new Array(shuffledQuestions.length).fill(false);
}

function updateProgressBar() {
    const segments = document.querySelectorAll('.progress-segment');
    segments.forEach((segment, index) => {
        segment.classList.remove('correct', 'incorrect');
        if (progressStatus[index] !== null) {
            segment.classList.add(progressStatus[index] ? 'correct' : 'incorrect');
        }
    });
}

function loadQuestion() {
    const question = shuffledQuestions[currentQuestion];
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    finalAnswerBtn.style.display = 'none';
    selectedOption = null;
    
    // Shuffle the options for this question
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'video-option';
        optionDiv.innerHTML = `<video controls><source src="${option.video}" type="video/mp4"></video>`;
        
        optionDiv.addEventListener('click', () => {
            if (!optionDiv.classList.contains('selected')) {
                document.querySelectorAll('.video-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                optionDiv.classList.add('selected');
                finalAnswerBtn.style.display = 'block';
                selectedOption = { element: optionDiv, correct: option.correct };
            }
        });
        optionsContainer.appendChild(optionDiv);
    });

    // clear feedback
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    updateProgressBar();
}

function confirmFinalAnswer() {
    if (!selectedOption) return;

    // Get all option elements
    const options = document.querySelectorAll('.video-option');
    const question = shuffledQuestions[currentQuestion];

    // 1. Remove 'selected' class and mark as correct/incorrect
    selectedOption.element.classList.remove('selected');
    selectedOption.element.classList.add(selectedOption.correct ? 'correct' : 'incorrect');

    // 2. Find and highlight the correct answer (if wrong was selected)
    if (!selectedOption.correct) {
        question.options.forEach((option, index) => {
            if (option === question.correct) {
                options[index].classList.add('correct');
            }
        });
    }

    // 3. Play the correct video (regardless of user's choice)
    question.options.forEach((option, index) => {
        if (option === question.correct) {
            const correctVideo = options[index].querySelector('video');
            if (correctVideo) {
                // Pause all videos first
                document.querySelectorAll('.video-option video').forEach(vid => vid.pause());

                // Play correct video
                correctVideo.currentTime = 0;
                correctVideo.play().catch(e => console.log("Video play error:", e));
            }
        }
    });

    // 4. Lock all options to prevent further interaction
    options.forEach(opt => opt.classList.add('locked'));

    progressStatus[currentQuestion] = selectedOption.correct;
    score[currentQuestion] = selectedOption.correct;

    // Disable all options
    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Remove existing feedback text
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Display new feedback message
    const feedbackText = document.createElement('div');
    feedbackText.id = 'feedbackText';
    feedbackText.textContent = selectedOption.correct
        ? (Math.random() < 0.5 ? 'Correct! Good job!' : 'Correct Answer!')
        : 'Wrong answer, here is the correct sign:';
    feedbackText.className = selectedOption.correct ? 'feedback-correct' : 'feedback-wrong';
    questionText.parentNode.insertBefore(feedbackText, questionText.nextSibling);

    updateProgressBar();
    finalAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    // Clear feedback first
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Reset video options
    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('correct', 'incorrect', 'selected');
    });

    // Move to next question or show results
    currentQuestion++;
    // Check against shuffledQuestions.length instead of questions.length
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showFinalResults();
    }

    // Reset buttons
    finalAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

function calculateScore() {
    // Safely count correct answers (handle cases where score array might be empty)
    return score ? score.filter(Boolean).length : 0;
}

function showFinalResults() {
    const userScore = calculateScore();
    const totalQuestions = shuffledQuestions.length;
    
    // Clean any existing slashes and display the score
    const scoreDisplay = `${userScore}/${totalQuestions}`;
    document.getElementById('quiz-score').textContent = scoreDisplay;
    
    document.getElementById('quiz-modal').style.display = 'flex';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

// Event listeners
finalAnswerBtn.addEventListener('click', confirmFinalAnswer);
nextBtn.addEventListener('click', nextQuestion);

backButton.addEventListener('click', function() {
    modal.style.display = 'none';
    window.history.back();
});

tryAgainButton.addEventListener('click', function() {
    modal.style.display = 'none';
    
    // Reset quiz progress
    currentQuestion = 0;
    
    // Shuffle the questions again and take first 15
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);
    score = new Array(shuffledQuestions.length).fill(false);
    progressStatus = new Array(shuffledQuestions.length).fill(null);
    
    // Reinitialize and load first question
    initializeProgressBar();
    loadQuestion();
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    init();
});