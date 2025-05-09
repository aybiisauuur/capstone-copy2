const questions = [
    // Common Words 
    {
        question: "Which video says: Change / Correct / Update?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: New?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Transfer?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F618bc80c595b4493ad8acdfa44896729%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=618bc80c595b4493ad8acdfa44896729&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Personal Information?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Deactivated?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8a331bdfb150415a93cd7ded28cd38a2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8a331bdfb150415a93cd7ded28cd38a2&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Record?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Voter?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Certificate?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Vote?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Register?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Signature?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true', 
            correct: true }
            ],
    },
    // Registration Process
    {
        question: "Which video says: If you are a registered voter, you must be a resident for at least 6 months.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: How long have you been residing in your present barangay?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F21e3da74fcb84f84b60fb07a2260559d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=21e3da74fcb84f84b60fb07a2260559d&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Please check if your personal information is correct.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Once approved, your voter’s certificate will be released.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd82613bc7a4f5e8e65fef195ac079e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd82613bc7a4f5e8e65fef195ac079e&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Please fill out the form.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Are you registered in SK (Sangguniang Kabataan)?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Are you a registered voter in Baguio City?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Are you registered abroad?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Do you have a valid ID?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F16c9959c12004a33911a5664f10adab2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=16c9959c12004a33911a5664f10adab2&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: We will scan your thumbprint and index prints.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: We will take your picture.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Please put your signature.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Your application type is not new, it is for reactivation.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Your record is deactivated/inactive.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: How may I help you?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3ef3cd35689b42f280a7c2be69efc380%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3ef3cd35689b42f280a7c2be69efc380&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0a97e81c3761491b89ff5f050c892580%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0a97e81c3761491b89ff5f050c892580&alt=media&optimized=true', 
            correct: false }
            ],
    },
    // Common answers
    {
        question: "Which video says: The next registration will be next year.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: The national election will be held next year.",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true', 
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
    
    // Remove selected class and add correct/incorrect class
    selectedOption.element.classList.remove('selected');
    selectedOption.element.classList.add(selectedOption.correct ? 'correct' : 'incorrect');
    
    // If answer is wrong, find and highlight the correct option
    if (!selectedOption.correct) {
        const question = shuffledQuestions[currentQuestion];
        const correctOptionIndex = question.options.findIndex(option => option.correct);
        const options = document.querySelectorAll('.video-option');
        
        if (correctOptionIndex !== -1 && options[correctOptionIndex]) {
            const correctOptionElement = options[correctOptionIndex];
            correctOptionElement.classList.add('correct');
            
            // Play the correct video
            const correctVideo = correctOptionElement.querySelector('video');
            if (correctVideo) {
                // Pause all other videos first
                document.querySelectorAll('.video-option video').forEach(video => {
                    if (video !== correctVideo) video.pause();
                });
                
                // Play the correct video
                correctVideo.currentTime = 0;
                correctVideo.play().catch(e => console.log("Video play failed:", e));
            }
        }
    }
    
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