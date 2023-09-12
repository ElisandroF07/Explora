'use client';

import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		setTimeout(() => {
			window.location.pathname = '/introduction';
		}, 3000);
	}, []);

	return (
		<main className='bg-[var(--background-body)] text-[var(--foreground)] w-full h-full flex items-center justify-center'>
			<div>
				<svg
					width='200'
					height='153'
					viewBox='0 0 200 153'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0_1_343)'>
						<path
							className='svg'
							d='M71.1476 35.4066C71.0646 35.4065 70.9847 35.3749 70.924 35.3183C70.8633 35.2617 70.8263 35.1841 70.8205 35.1013C70.6059 32.185 69.298 29.4572 67.1584 27.4639C65.0188 25.4706 62.2054 24.3588 59.2812 24.3509C58.9312 24.3509 58.5636 24.3687 58.1884 24.4038C58.1257 24.4097 58.0626 24.3974 58.0066 24.3684C57.9507 24.3393 57.9043 24.2948 57.873 24.2401C56.5297 21.889 54.5238 19.9855 52.1056 18.7672C49.6873 17.5489 46.9638 17.0697 44.275 17.3895C41.5861 17.7093 39.051 18.8139 36.986 20.5654C34.9209 22.3169 33.4174 24.6378 32.6631 27.2384C32.6432 27.3081 32.6007 27.3692 32.5423 27.4121C32.4838 27.455 32.4128 27.4772 32.3403 27.4753L32.253 27.4726C32.2076 27.4711 32.1623 27.4695 32.1165 27.4695C29.8985 27.4765 27.7496 28.2416 26.0262 29.6379C24.3029 31.0342 23.1088 32.9777 22.642 35.146C22.6265 35.2197 22.5861 35.2858 22.5276 35.3333C22.4691 35.3807 22.3961 35.4066 22.3208 35.4066H0.328259C0.241346 35.4064 0.158073 35.3717 0.0966974 35.3101C0.0353221 35.2486 0.000854492 35.1652 0.000854492 35.0783C0.000854492 34.9914 0.0353221 34.908 0.0966974 34.8465C0.158073 34.785 0.241346 34.7503 0.328259 34.75H22.0581C22.6051 32.4947 23.8918 30.4875 25.7129 29.0489C27.534 27.6103 29.7844 26.8231 32.1052 26.813C32.9314 24.1405 34.5159 21.7655 36.6662 19.9765C38.8166 18.1874 41.4402 17.0613 44.2183 16.7351C46.9965 16.4088 49.8096 16.8963 52.316 18.1385C54.8223 19.3806 56.914 21.3239 58.3369 23.7322C58.6598 23.707 58.9766 23.6944 59.2812 23.6944C62.3714 23.7027 65.3445 24.8777 67.6055 26.9843C69.8665 29.0908 71.2487 31.9734 71.4754 35.0553C71.4785 35.0983 71.473 35.1415 71.4593 35.1824C71.4457 35.2233 71.4241 35.2611 71.3958 35.2936C71.3675 35.3262 71.3331 35.3528 71.2945 35.3721C71.2559 35.3913 71.2139 35.4028 71.1709 35.4058C71.1631 35.4063 71.1554 35.4066 71.1476 35.4066Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M67.2418 39.6155H13.4049C13.3179 39.6155 13.2344 39.5809 13.1728 39.5194C13.1112 39.4578 13.0767 39.3743 13.0767 39.2873C13.0767 39.2002 13.1112 39.1167 13.1728 39.0551C13.2344 38.9936 13.3179 38.959 13.4049 38.959H67.2418C67.3289 38.959 67.4124 38.9936 67.4739 39.0551C67.5355 39.1167 67.5701 39.2002 67.5701 39.2873C67.5701 39.3743 67.5355 39.4578 67.4739 39.5194C67.4124 39.5809 67.3289 39.6155 67.2418 39.6155Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M26.5359 44.3755H8.48088C8.4377 44.3757 8.39492 44.3673 8.35499 44.3508C8.31506 44.3344 8.27877 44.3102 8.24819 44.2797C8.21761 44.2492 8.19336 44.213 8.1768 44.1731C8.16025 44.1332 8.15173 44.0905 8.15173 44.0473C8.15173 44.0041 8.16025 43.9613 8.1768 43.9214C8.19336 43.8816 8.21761 43.8453 8.24819 43.8148C8.27877 43.7843 8.31506 43.7602 8.35499 43.7437C8.39492 43.7273 8.4377 43.7189 8.48088 43.719H26.5359C26.6228 43.7192 26.7061 43.7539 26.7675 43.8155C26.8289 43.877 26.8633 43.9604 26.8633 44.0473C26.8633 44.1342 26.8289 44.2176 26.7675 44.2791C26.7061 44.3406 26.6228 44.3753 26.5359 44.3755Z'
							fill='#CBCBCB'
						/>
						<path
							d='M43.4165 108.249C43.4165 121.595 29.4247 127.981 29.4247 127.981C29.4247 127.981 15.2895 121.595 15.0025 108.249C14.8338 100.404 21.3632 94.0417 29.2095 94.0417C31.0752 94.0417 32.9226 94.4092 34.6463 95.1232C36.3699 95.8372 37.9361 96.8836 39.2554 98.2029C40.5746 99.5221 41.6211 101.088 42.3351 102.812C43.049 104.536 43.4165 106.383 43.4165 108.249Z'
							fill='#E5E5E5'
						/>
						<path
							d='M34.1604 128.77H24.689L23.5409 124.178H35.3084L34.1604 128.77Z'
							fill='#CBCBCB'
						/>
						<path
							d='M33.8375 136.624H25.012V141.223H33.8375V136.624Z'
							fill='white'
						/>
						<path
							d='M33.9093 141.295H24.9402V136.552H33.9093V141.295ZM25.0837 141.151H33.7658V136.695H25.0837V141.151Z'
							fill='#CBCBCB'
						/>
						<path
							d='M31.2338 129.312H27.6157L27.2004 128.659H31.6491L31.2338 129.312Z'
							fill='#CBCBCB'
						/>
						<path
							d='M24.9044 128.77H24.7609V135.802H24.9044V128.77Z'
							fill='#CBCBCB'
						/>
						<path
							d='M34.0887 128.77H33.9452V135.802H34.0887V128.77Z'
							fill='#CBCBCB'
						/>
						<path
							d='M30.8631 124.1L30.7755 123.986C34.9213 120.789 39.8632 115.312 39.8632 107.375C39.8665 104.596 39.049 101.877 37.5131 99.5596C35.9773 97.2426 33.7915 95.4306 31.23 94.3509L31.2859 94.2188C33.8734 95.3094 36.0814 97.1398 37.6328 99.4803C39.1842 101.821 40.01 104.567 40.0067 107.375C40.0067 115.371 35.0344 120.883 30.8631 124.1Z'
							fill='#CBCBCB'
						/>
						<path
							d='M26.271 124.1L26.1833 123.986C30.3291 120.789 35.2711 115.312 35.2711 107.375C35.2722 104.614 34.4645 101.913 32.9477 99.6061C31.4309 97.2989 29.2715 95.4866 26.7362 94.393L26.7931 94.2612C29.3541 95.366 31.5354 97.1967 33.0676 99.5273C34.5998 101.858 35.4157 104.586 35.4146 107.375C35.4146 115.371 30.4422 120.883 26.271 124.1Z'
							fill='#CBCBCB'
						/>
						<path
							d='M32.1479 124.1C27.9767 120.883 23.0044 115.371 23.0044 107.375C23.0033 104.586 23.8192 101.858 25.3514 99.5273C26.8836 97.1967 29.065 95.3659 31.626 94.2612L31.6829 94.393C29.1476 95.4866 26.9881 97.2989 25.4713 99.6061C23.9545 101.913 23.1468 104.614 23.1479 107.375C23.1479 115.312 28.0898 120.789 32.2356 123.986L32.1479 124.1Z'
							fill='#CBCBCB'
						/>
						<path
							d='M27.5558 124.1C23.3846 120.883 18.4123 115.371 18.4123 107.375C18.4076 104.556 19.2392 101.799 20.8019 99.4529C22.3646 97.1066 24.5882 95.2766 27.1913 94.1943L27.2466 94.3268C24.6697 95.3981 22.4684 97.2098 20.9214 99.5325C19.3744 101.855 18.5511 104.585 18.5557 107.375C18.5557 115.312 23.4977 120.789 27.6434 123.986L27.5558 124.1Z'
							fill='#CBCBCB'
						/>
						<path
							d='M29.2812 94.0417H29.1377V124.178H29.2812V94.0417Z'
							fill='#CBCBCB'
						/>
						<path
							d='M27.5927 135.581L24.9612 138.212L25.0626 138.314L27.6941 135.682L27.5927 135.581Z'
							fill='#CBCBCB'
						/>
						<path
							d='M28.8719 135.537L24.9602 139.651L25.0642 139.75L28.9759 135.636L28.8719 135.537Z'
							fill='#CBCBCB'
						/>
						<path
							d='M34.6627 135.586H23.8998V136.878H34.6627V135.586Z'
							fill='white'
						/>
						<path
							d='M34.7344 136.95H23.828V135.515H34.7344V136.95ZM23.9715 136.806H34.5909V135.658H23.9715V136.806Z'
							fill='#CBCBCB'
						/>
						<path
							d='M70.4945 74.4261C70.4945 83.235 61.2594 87.45 61.2594 87.45C61.2594 87.45 51.9295 83.235 51.74 74.4261C51.6287 69.2484 55.9384 65.0488 61.1173 65.0488C63.6043 65.0488 65.9894 66.0368 67.748 67.7954C69.5066 69.5539 70.4945 71.9391 70.4945 74.4261Z'
							fill='#E5E5E5'
						/>
						<path
							d='M64.3851 87.971H58.1335L57.3759 84.9399H65.143L64.3851 87.971Z'
							fill='#CBCBCB'
						/>
						<path
							d='M64.1721 93.1545H58.3468V96.1902H64.1721V93.1545Z'
							fill='white'
						/>
						<path
							d='M64.2194 96.2376H58.2994V93.1072H64.2194V96.2376ZM58.3942 96.1429H64.1247V93.2019H58.3942V96.1429Z'
							fill='#CBCBCB'
						/>
						<path
							d='M62.4534 88.3284H60.0652L59.7911 87.8977H62.7275L62.4534 88.3284Z'
							fill='#CBCBCB'
						/>
						<path
							d='M58.2758 87.9709H58.181V92.6122H58.2758V87.9709Z'
							fill='#CBCBCB'
						/>
						<path
							d='M64.3378 87.9709H64.243V92.6122H64.3378V87.9709Z'
							fill='#CBCBCB'
						/>
						<path
							d='M62.2088 84.8885L62.151 84.8134C64.8874 82.7033 68.1492 79.0882 68.1492 73.8495C68.1514 72.0147 67.6118 70.2201 66.5981 68.6907C65.5844 67.1614 64.1417 65.9654 62.451 65.2528L62.4879 65.1655C64.1958 65.8854 65.6531 67.0935 66.6771 68.6384C67.7011 70.1832 68.2462 71.9961 68.244 73.8495C68.244 79.1267 64.962 82.7653 62.2088 84.8885Z'
							fill='#CBCBCB'
						/>
						<path
							d='M59.1777 84.8886L59.1199 84.8135C61.8563 82.7034 65.1182 79.0883 65.1182 73.8495C65.1189 72.0271 64.5858 70.2443 63.5846 68.7215C62.5835 67.1986 61.1582 66.0024 59.4847 65.2806L59.5223 65.1936C61.2127 65.9228 62.6525 67.1311 63.6638 68.6694C64.6751 70.2077 65.2136 72.0086 65.2129 73.8495C65.2129 79.1268 61.9309 82.7654 59.1777 84.8886Z'
							fill='#CBCBCB'
						/>
						<path
							d='M63.0569 84.8886C60.3037 82.7654 57.0217 79.1268 57.0217 73.8496C57.021 72.0086 57.5595 70.2077 58.5708 68.6694C59.5822 67.1311 61.022 65.9228 62.7124 65.1936L62.7499 65.2806C61.0765 66.0024 59.6512 67.1986 58.65 68.7215C57.6488 70.2443 57.1157 72.0271 57.1164 73.8496C57.1164 79.0883 60.3783 82.7034 63.1147 84.8135L63.0569 84.8886Z'
							fill='#CBCBCB'
						/>
						<path
							d='M60.0258 84.8885C57.2726 82.7654 53.9906 79.1268 53.9906 73.8495C53.9875 71.9888 54.5364 70.169 55.5679 68.6203C56.5994 67.0716 58.067 65.8637 59.7852 65.1494L59.8217 65.2368C58.1208 65.944 56.6679 67.1397 55.6468 68.6728C54.6257 70.2059 54.0823 72.0075 54.0853 73.8495C54.0853 79.0883 57.3472 82.7033 60.0836 84.8135L60.0258 84.8885Z'
							fill='#CBCBCB'
						/>
						<path
							d='M61.1647 65.0488H61.0699V84.94H61.1647V65.0488Z'
							fill='#CBCBCB'
						/>
						<path
							d='M60.0501 92.4662L58.3132 94.2031L58.3802 94.2701L60.1171 92.5332L60.0501 92.4662Z'
							fill='#CBCBCB'
						/>
						<path
							d='M60.8945 92.4373L58.3126 95.1528L58.3813 95.2181L60.9632 92.5026L60.8945 92.4373Z'
							fill='#CBCBCB'
						/>
						<path
							d='M64.7167 92.4702H57.6127V93.3227H64.7167V92.4702Z'
							fill='white'
						/>
						<path
							d='M64.764 93.3701H57.5653V92.4229H64.764V93.3701ZM57.66 93.2753H64.6693V92.5176H57.66V93.2753Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M149.002 86.4693C149.062 86.4693 149.119 86.4466 149.163 86.406C149.206 86.3654 149.233 86.3099 149.237 86.2505C149.391 84.1601 150.328 82.2049 151.862 80.7761C153.395 79.3473 155.412 78.5504 157.508 78.5448C157.759 78.5448 158.022 78.5575 158.291 78.5827C158.336 78.5869 158.382 78.5781 158.422 78.5573C158.462 78.5365 158.495 78.5046 158.517 78.4654C159.48 76.7801 160.918 75.4157 162.651 74.5424C164.385 73.6691 166.337 73.3257 168.264 73.5549C170.192 73.7841 172.009 74.5759 173.489 75.8314C174.969 77.0868 176.047 78.7504 176.587 80.6145C176.602 80.6645 176.632 80.7082 176.674 80.739C176.716 80.7697 176.767 80.7856 176.819 80.7843L176.881 80.7824C176.914 80.7813 176.947 80.7801 176.979 80.7801C178.569 80.7851 180.109 81.3335 181.345 82.3344C182.58 83.3352 183.436 84.7283 183.771 86.2826C183.782 86.3354 183.811 86.3828 183.853 86.4168C183.894 86.4508 183.947 86.4693 184.001 86.4693H199.765C199.796 86.4694 199.826 86.4634 199.855 86.4516C199.884 86.4398 199.91 86.4225 199.932 86.4007C199.954 86.3788 199.971 86.3528 199.983 86.3242C199.995 86.2956 200.001 86.265 200.001 86.234C200.001 86.2031 199.995 86.1724 199.983 86.1438C199.971 86.1152 199.954 86.0892 199.932 86.0674C199.91 86.0455 199.884 86.0282 199.855 86.0164C199.826 86.0046 199.796 85.9986 199.765 85.9987H184.189C183.797 84.3821 182.875 82.9434 181.569 81.9122C180.264 80.881 178.651 80.3168 176.987 80.3095C176.395 78.3939 175.259 76.6915 173.718 75.4092C172.177 74.1268 170.296 73.3197 168.305 73.0858C166.313 72.8519 164.297 73.2014 162.501 74.0917C160.704 74.9821 159.205 76.375 158.185 78.1013C157.953 78.0832 157.726 78.0742 157.508 78.0742C155.293 78.0802 153.162 78.9224 151.541 80.4323C149.921 81.9422 148.93 84.0085 148.767 86.2175C148.765 86.2484 148.769 86.2793 148.779 86.3086C148.789 86.3379 148.804 86.365 148.824 86.3884C148.845 86.4117 148.869 86.4308 148.897 86.4446C148.925 86.4584 148.955 86.4666 148.986 86.4688C148.991 86.4691 148.997 86.4693 149.002 86.4693Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M151.802 89.4865H190.392C190.454 89.4865 190.514 89.4617 190.558 89.4176C190.602 89.3734 190.627 89.3136 190.627 89.2512C190.627 89.1888 190.602 89.1289 190.558 89.0848C190.514 89.0407 190.454 89.0159 190.392 89.0159H151.802C151.74 89.0159 151.68 89.0407 151.636 89.0848C151.591 89.1289 151.567 89.1888 151.567 89.2512C151.567 89.3136 151.591 89.3734 151.636 89.4176C151.68 89.4617 151.74 89.4865 151.802 89.4865Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M180.979 92.8983H193.921C193.983 92.8982 194.043 92.8733 194.087 92.8292C194.131 92.7851 194.156 92.7253 194.156 92.663C194.156 92.6008 194.131 92.541 194.087 92.4969C194.043 92.4528 193.983 92.4279 193.921 92.4277H180.979C180.949 92.4277 180.918 92.4338 180.889 92.4456C180.861 92.4575 180.835 92.4748 180.813 92.4967C180.791 92.5185 180.774 92.5444 180.762 92.573C180.75 92.6015 180.744 92.6321 180.744 92.663C180.744 92.6939 180.75 92.7245 180.762 92.7531C180.774 92.7816 180.791 92.8076 180.813 92.8294C180.835 92.8513 180.861 92.8686 180.889 92.8804C180.918 92.8922 180.949 92.8983 180.979 92.8983Z'
							fill='#CBCBCB'
						/>
						<path
							d='M120.843 149.674H120.068L119.7 146.687H120.843V149.674Z'
							fill='#9F616A'
						/>
						<path
							d='M121.04 150.425H118.543V150.393C118.543 150.135 118.646 149.888 118.828 149.706C119.01 149.524 119.257 149.421 119.515 149.421H121.04V150.425Z'
							fill='#2F2E41'
						/>
						<path
							d='M130.831 148.206L130.167 148.605L128.312 146.234L129.292 145.645L130.831 148.206Z'
							fill='#9F616A'
						/>
						<path
							d='M129.246 150.034L129.23 150.007C129.097 149.786 129.058 149.522 129.12 149.271C129.183 149.021 129.342 148.806 129.563 148.673L130.87 147.888L131.387 148.748L129.246 150.034Z'
							fill='#2F2E41'
						/>
						<path
							d='M121.044 149.057L121.031 149.057C120.654 149.056 120.278 149.035 119.903 148.992C119.761 148.978 119.606 148.963 119.419 148.948L119.413 148.947C119.286 148.909 119.282 147.715 119.336 143.63C119.364 141.537 119.395 139.165 119.358 137.655L119.357 137.64L119.368 137.63C120.042 137.04 120.846 136.617 121.714 136.397C122.583 136.176 123.491 136.164 124.365 136.362L124.378 136.365L124.385 136.377C125.147 137.665 126.296 139.52 127.408 141.314C129.959 145.433 130.689 146.644 130.609 146.736L130.599 146.743C130.425 146.83 130.294 146.897 130.183 146.954C129.743 147.182 129.291 147.386 128.828 147.565L128.808 147.574L128.793 147.558C126.204 144.721 124.049 141.552 122.717 138.622C122.561 139.622 122.372 140.928 122.172 142.308C121.598 146.276 121.21 148.889 121.054 149.048L121.044 149.057Z'
							fill='#2F2E41'
						/>
						<path
							d='M121.742 137.96C123.286 137.953 124.819 138.21 126.277 138.719C126.327 136.273 125.507 133.888 123.963 131.99L123.951 131.976L123.957 131.959C124.364 130.784 124.784 129.569 125.16 128.361L125.154 128.34C124.891 127.404 124.325 126.458 123.425 125.447C123.328 125.346 123.195 125.286 123.055 125.279C122.915 125.272 122.777 125.318 122.67 125.409C121.881 126.13 121.267 127.021 120.874 128.014C120.481 129.007 120.319 130.076 120.4 131.142L120.401 131.148L120.399 131.154C119.695 133.54 119.439 134.766 119.213 135.848C119.049 136.637 118.906 137.32 118.62 138.296C119.646 138.073 120.692 137.96 121.742 137.96Z'
							fill='#CBCBCB'
						/>
						<path
							opacity='0.1'
							d='M124.015 130.415L121.723 135.405L120.413 134.079L124.015 130.415Z'
							fill='black'
						/>
						<path
							d='M123.035 124.962C123.935 124.962 124.665 124.232 124.665 123.331C124.665 122.43 123.935 121.7 123.035 121.7C122.134 121.7 121.404 122.43 121.404 123.331C121.404 124.232 122.134 124.962 123.035 124.962Z'
							fill='#9F616A'
						/>
						<path
							d='M121.058 122.41H123.647V121.281C123.079 121.055 122.523 120.863 122.186 121.281C121.887 121.281 121.6 121.4 121.388 121.612C121.177 121.823 121.058 122.11 121.058 122.41Z'
							fill='#2F2E41'
						/>
						<path
							d='M123.79 121.082C125.338 121.082 125.771 123.022 125.771 124.117C125.771 124.727 125.495 124.945 125.061 125.019L124.908 124.202L124.549 125.055C124.428 125.055 124.3 125.053 124.167 125.05L124.045 124.8L123.774 125.046C122.687 125.047 121.809 125.206 121.809 124.117C121.809 123.022 122.189 121.082 123.79 121.082Z'
							fill='#2F2E41'
						/>
						<path
							d='M170.544 45.75C170.544 88.7274 125.487 109.292 125.487 109.292C125.487 109.292 79.9681 88.7274 79.0439 45.75C78.5006 20.4888 99.5269 0 124.794 0C150.061 0 170.544 20.483 170.544 45.75Z'
							fill='#9292FD'
						/>
						<path
							d='M126.454 149.336H125.504L125.052 145.673H126.454V149.336Z'
							fill='#FFB7B7'
						/>
						<path
							d='M124.825 149.065H126.657V150.218H123.672C123.672 150.066 123.702 149.917 123.76 149.777C123.818 149.637 123.903 149.51 124.01 149.402C124.117 149.295 124.244 149.21 124.384 149.152C124.524 149.095 124.674 149.065 124.825 149.065Z'
							fill='#2F2E41'
						/>
						<path
							d='M130.017 149.336H129.067L128.615 145.673H130.017L130.017 149.336Z'
							fill='#FFB7B7'
						/>
						<path
							d='M128.389 149.065H130.22V150.218H127.236C127.236 149.912 127.357 149.619 127.573 149.402C127.79 149.186 128.083 149.065 128.389 149.065Z'
							fill='#2F2E41'
						/>
						<path
							d='M129.901 138.426C129.799 138.36 129.712 138.273 129.647 138.17C129.582 138.067 129.541 137.951 129.526 137.83C129.51 137.709 129.522 137.587 129.559 137.471C129.596 137.355 129.658 137.249 129.741 137.16L129.116 128.285L130.917 128.46L130.967 137.151C131.107 137.3 131.188 137.495 131.194 137.7C131.201 137.905 131.132 138.105 131 138.262C130.869 138.419 130.684 138.522 130.482 138.553C130.279 138.583 130.072 138.538 129.901 138.426Z'
							fill='#FFB7B7'
						/>
						<path
							d='M126.409 147.491L125.363 147.441C125.274 147.437 125.19 147.398 125.128 147.334C125.066 147.27 125.032 147.184 125.031 147.095L124.958 136.517C124.958 136.466 124.968 136.417 124.989 136.371C125.01 136.325 125.04 136.284 125.078 136.251C125.116 136.218 125.16 136.194 125.208 136.18C125.256 136.166 125.307 136.162 125.357 136.169L129.54 136.776C129.622 136.788 129.698 136.829 129.753 136.892C129.808 136.955 129.838 137.035 129.838 137.119L130.376 146.921C130.376 146.967 130.368 147.012 130.35 147.055C130.333 147.098 130.307 147.136 130.275 147.169C130.242 147.202 130.204 147.228 130.161 147.245C130.119 147.263 130.073 147.272 130.027 147.272H128.9C128.817 147.272 128.737 147.243 128.673 147.189C128.61 147.135 128.568 147.06 128.556 146.978C128.556 146.978 127.705 139.625 127.588 139.629C127.47 139.632 126.771 147.184 126.771 147.184C126.761 147.269 126.72 147.346 126.656 147.403C126.593 147.46 126.51 147.491 126.425 147.491C126.42 147.491 126.414 147.491 126.409 147.491Z'
							fill='#2F2E41'
						/>
						<path
							d='M129.524 131.268C129.481 131.237 129.447 131.198 129.422 131.152C129.397 131.107 129.382 131.056 129.38 131.004L129.248 128.612C129.235 128.375 129.31 128.142 129.459 127.957C129.607 127.772 129.819 127.649 130.054 127.611C130.288 127.573 130.528 127.624 130.727 127.752C130.927 127.881 131.072 128.079 131.134 128.308L131.714 130.446C131.738 130.536 131.725 130.631 131.679 130.711C131.633 130.791 131.557 130.85 131.468 130.874L129.819 131.321C129.769 131.335 129.716 131.337 129.665 131.328C129.614 131.319 129.566 131.298 129.524 131.268Z'
							fill='#3F3D56'
						/>
						<path
							d='M127.983 125.583C129.034 125.583 129.886 124.731 129.886 123.68C129.886 122.629 129.034 121.778 127.983 121.778C126.932 121.778 126.08 122.629 126.08 123.68C126.08 124.731 126.932 125.583 127.983 125.583Z'
							fill='#FFB7B7'
						/>
						<path
							d='M129.329 125.185C129.25 125.271 129.147 125.333 129.034 125.362C128.921 125.392 128.802 125.388 128.69 125.353C128.579 125.317 128.48 125.25 128.406 125.16C128.331 125.07 128.284 124.96 128.269 124.844C128.265 124.804 128.266 124.764 128.27 124.724C128.294 124.495 128.426 124.287 128.394 124.045C128.387 123.985 128.365 123.928 128.329 123.879C128.046 123.5 127.382 124.048 127.115 123.706C126.952 123.495 127.144 123.164 127.018 122.929C126.853 122.619 126.362 122.772 126.054 122.602C125.711 122.413 125.732 121.888 125.957 121.568C126.104 121.379 126.291 121.225 126.504 121.116C126.717 121.008 126.952 120.947 127.191 120.94C127.669 120.929 128.145 121.021 128.584 121.212C129.103 121.381 129.561 121.698 129.901 122.125C130.077 122.405 130.189 122.72 130.228 123.049C130.267 123.377 130.232 123.71 130.127 124.023C130.012 124.407 129.619 124.877 129.329 125.185Z'
							fill='#2F2E41'
						/>
						<path
							d='M129.882 126.854C129.849 126.83 129.815 126.807 129.781 126.784C129.598 126.662 129.4 126.565 129.193 126.495V125.995H127.721V126.459C127.233 126.594 126.795 126.869 126.462 127.25C126.13 127.632 125.916 128.102 125.849 128.604L124.847 136.045C124.84 136.091 124.843 136.139 124.856 136.184C124.868 136.229 124.89 136.271 124.919 136.308C124.947 136.345 124.983 136.375 125.024 136.397C125.064 136.42 125.109 136.433 125.155 136.438C125.858 136.529 126.534 136.76 127.145 137.119C127.588 137.365 128.087 137.492 128.594 137.489C128.996 137.487 129.395 137.416 129.773 137.279C129.837 137.255 129.893 137.213 129.933 137.158C129.973 137.103 129.996 137.037 129.999 136.969C130.035 136.168 130.246 132.046 130.861 129.532C130.98 129.039 130.951 128.521 130.777 128.045C130.603 127.568 130.291 127.154 129.882 126.854Z'
							fill='#3F3D56'
						/>
						<path
							d='M140.737 111.834H110.237L106.54 97.0457H144.434L140.737 111.834Z'
							fill='#3F3D56'
						/>
						<path
							d='M139.697 137.123H111.277V151.934H139.697V137.123Z'
							fill='white'
						/>
						<path
							d='M139.928 152.165H111.046V136.892H139.928V152.165ZM111.508 151.703H139.466V137.354H111.508V151.703Z'
							fill='#3F3D56'
						/>
						<path
							d='M131.313 113.577H119.661L118.324 111.476H132.65L131.313 113.577Z'
							fill='#3F3D56'
						/>
						<path
							d='M110.93 111.833H110.468V134.477H110.93V111.833Z'
							fill='#3F3D56'
						/>
						<path
							d='M140.506 111.833H140.044V134.477H140.506V111.833Z'
							fill='#3F3D56'
						/>
						<path
							d='M130.119 96.7952L129.837 96.4292C143.187 86.134 159.101 68.4967 159.101 42.9378C159.112 33.9861 156.48 25.2306 151.534 17.7692C146.588 10.3078 139.549 4.47276 131.3 0.995878L131.481 0.570312C139.813 4.08248 146.923 9.97672 151.919 17.5138C156.915 25.0509 159.574 33.8953 159.564 42.9378C159.564 68.6844 143.552 86.4366 130.119 96.7952Z'
							fill='#3F3D56'
						/>
						<path
							d='M115.331 96.7951L115.049 96.4291C128.399 86.134 144.314 68.4966 144.314 42.9377C144.317 34.0462 141.716 25.3484 136.832 17.9187C131.947 10.4889 124.993 4.65275 116.829 1.131L117.012 0.706787C125.259 4.26427 132.284 10.1597 137.218 17.6648C142.152 25.1699 144.779 33.956 144.776 42.9377C144.776 68.6844 128.764 86.4367 115.331 96.7951Z'
							fill='#3F3D56'
						/>
						<path
							d='M134.256 96.7951C120.824 86.4367 104.812 68.6845 104.812 42.9378C104.808 33.956 107.436 25.1699 112.37 17.6647C117.304 10.1596 124.329 4.2642 132.576 0.706787L132.759 1.131C124.595 4.65269 117.641 10.4889 112.756 17.9186C107.872 25.3484 105.271 34.0462 105.274 42.9378C105.274 68.4966 121.188 86.134 134.539 96.4292L134.256 96.7951Z'
							fill='#3F3D56'
						/>
						<path
							d='M119.469 96.7952C106.036 86.4367 90.0241 68.6846 90.0241 42.9378C90.009 33.8597 92.6871 24.9811 97.7194 17.4254C102.752 9.86967 109.912 3.97648 118.295 0.491455L118.473 0.917923C110.175 4.36791 103.086 10.2019 98.1042 17.6817C93.1224 25.1614 90.4713 33.9509 90.4862 42.9378C90.4862 68.4969 106.4 86.1341 119.751 96.4292L119.469 96.7952Z'
							fill='#3F3D56'
						/>
						<path
							d='M125.025 0H124.563V97.0456H125.025V0Z'
							fill='#3F3D56'
						/>
						<path
							d='M119.587 133.765L111.113 142.239L111.44 142.566L119.914 134.092L119.587 133.765Z'
							fill='#3F3D56'
						/>
						<path
							d='M123.707 133.624L111.11 146.873L111.445 147.191L124.042 133.943L123.707 133.624Z'
							fill='#3F3D56'
						/>
						<path
							d='M142.354 133.784H107.695V137.943H142.354V133.784Z'
							fill='white'
						/>
						<path
							d='M142.586 138.174H107.464V133.553H142.586V138.174ZM107.926 137.712H142.123V134.015H107.926V137.712Z'
							fill='#3F3D56'
						/>
						<path
							d='M118.905 135.719C118.998 135.712 119.088 135.685 119.169 135.64C119.25 135.595 119.321 135.533 119.375 135.458C119.43 135.383 119.467 135.296 119.485 135.205C119.502 135.114 119.5 135.02 119.477 134.93L121.366 133.693L120.289 133.228L118.66 134.474C118.512 134.522 118.386 134.623 118.306 134.758C118.227 134.892 118.2 135.051 118.23 135.205C118.26 135.358 118.345 135.495 118.47 135.59C118.594 135.685 118.749 135.73 118.905 135.719Z'
							fill='#9F616A'
						/>
						<path
							d='M120.722 134.827L120.698 134.811C120.249 134.48 119.75 134.138 119.268 133.807L119.239 133.787L119.261 133.76C120.291 132.555 121.322 131.297 122.319 130.079L122.318 130.075L122.327 130.07L122.331 130.065L122.333 130.067L122.339 130.064L122.312 130.066L122.005 127.656C121.852 127.405 121.775 127.116 121.781 126.823C121.786 126.53 121.876 126.244 122.038 126C122.224 125.736 122.501 125.551 122.816 125.479C123.131 125.407 123.461 125.454 123.744 125.61C123.883 125.704 124 125.828 124.085 125.973C124.17 126.117 124.221 126.279 124.235 126.447C124.255 126.596 124.241 126.747 124.195 126.89C124.149 127.033 124.071 127.164 123.968 127.273C124.074 128.443 124.121 129.618 124.108 130.792L124.108 130.803L124.101 130.812C123.038 132.163 121.871 133.506 120.741 134.805L120.722 134.827Z'
							fill='#CBCBCB'
						/>
						<path
							d='M121.088 127.418C121.098 127.46 121.104 127.503 121.107 127.545L124.434 129.465L125.243 129L126.106 130.128L124.375 131.362L120.579 128.367C120.424 128.424 120.255 128.433 120.095 128.392C119.935 128.351 119.792 128.262 119.683 128.138C119.575 128.013 119.507 127.859 119.489 127.695C119.47 127.531 119.502 127.365 119.58 127.219C119.658 127.074 119.779 126.956 119.926 126.88C120.073 126.805 120.239 126.776 120.403 126.798C120.567 126.82 120.72 126.891 120.842 127.001C120.965 127.112 121.05 127.258 121.088 127.418Z'
							fill='#FFB7B7'
						/>
						<path
							d='M124.553 129.302C124.548 129.25 124.554 129.198 124.571 129.149C124.589 129.1 124.617 129.056 124.653 129.019L126.347 127.325C126.515 127.157 126.739 127.057 126.976 127.045C127.213 127.032 127.446 127.108 127.631 127.257C127.815 127.407 127.938 127.619 127.975 127.853C128.012 128.088 127.961 128.328 127.832 128.527L126.626 130.385C126.575 130.463 126.496 130.517 126.406 130.536C126.316 130.556 126.221 130.538 126.144 130.488L124.71 129.558C124.667 129.53 124.63 129.492 124.603 129.448C124.575 129.403 124.559 129.354 124.553 129.302Z'
							fill='#3F3D56'
						/>
						<path
							className='svg'
							d='M101.51 112.81C101.45 112.81 101.393 112.788 101.349 112.747C101.306 112.707 101.279 112.651 101.275 112.592C101.121 110.501 100.184 108.546 98.6503 107.117C97.1166 105.688 95.1 104.891 93.004 104.886C92.7531 104.886 92.4896 104.899 92.2207 104.924C92.1757 104.928 92.1305 104.919 92.0904 104.898C92.0503 104.878 92.017 104.846 91.9946 104.806C91.0318 103.121 89.594 101.757 87.8606 100.883C86.1272 100.01 84.1751 99.6667 82.2477 99.896C80.3204 100.125 78.5032 100.917 77.0231 102.172C75.5429 103.428 74.4652 105.091 73.9245 106.956C73.9102 107.006 73.8797 107.049 73.8379 107.08C73.796 107.111 73.745 107.127 73.6931 107.125L73.6306 107.123C73.598 107.122 73.5655 107.121 73.5327 107.121C71.9429 107.126 70.4025 107.675 69.1673 108.675C67.932 109.676 67.0761 111.069 66.7415 112.624C66.7304 112.676 66.7014 112.724 66.6595 112.758C66.6176 112.792 66.5652 112.81 66.5112 112.81H50.7473C50.7163 112.81 50.6856 112.804 50.657 112.793C50.6284 112.781 50.6023 112.764 50.5804 112.742C50.5585 112.72 50.5411 112.694 50.5292 112.665C50.5173 112.637 50.5112 112.606 50.5112 112.575C50.5112 112.544 50.5173 112.513 50.5292 112.485C50.5411 112.456 50.5585 112.43 50.5804 112.408C50.6023 112.387 50.6284 112.369 50.657 112.357C50.6856 112.346 50.7163 112.34 50.7473 112.34H66.3229C66.715 110.723 67.6373 109.284 68.9427 108.253C70.248 107.222 71.8611 106.658 73.5246 106.651C74.1168 104.735 75.2525 103.033 76.7939 101.75C78.3352 100.468 80.2158 99.6607 82.2071 99.4269C84.1985 99.193 86.2149 99.5425 88.0114 100.433C89.8079 101.323 91.3072 102.716 92.3271 104.442C92.5586 104.424 92.7857 104.415 93.004 104.415C95.219 104.421 97.3501 105.263 98.9708 106.773C100.591 108.283 101.582 110.35 101.745 112.559C101.747 112.589 101.743 112.62 101.733 112.65C101.723 112.679 101.708 112.706 101.688 112.729C101.667 112.753 101.643 112.772 101.615 112.786C101.587 112.799 101.557 112.808 101.526 112.81C101.521 112.81 101.515 112.81 101.51 112.81Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M98.71 115.827H60.1204C60.0895 115.827 60.0588 115.821 60.0302 115.81C60.0015 115.798 59.9755 115.78 59.9536 115.759C59.9317 115.737 59.9143 115.711 59.9024 115.682C59.8905 115.654 59.8844 115.623 59.8844 115.592C59.8844 115.561 59.8905 115.53 59.9024 115.502C59.9143 115.473 59.9317 115.447 59.9536 115.425C59.9755 115.403 60.0015 115.386 60.0302 115.374C60.0588 115.363 60.0895 115.357 60.1204 115.357H98.71C98.7724 115.357 98.8323 115.381 98.8764 115.426C98.9206 115.47 98.9453 115.53 98.9453 115.592C98.9453 115.654 98.9206 115.714 98.8764 115.758C98.8323 115.803 98.7724 115.827 98.71 115.827Z'
							fill='#CBCBCB'
						/>
						<path
							className='svg'
							d='M69.5325 119.239H56.5909C56.5599 119.239 56.5293 119.233 56.5006 119.221C56.472 119.21 56.446 119.192 56.424 119.171C56.4021 119.149 56.3847 119.123 56.3728 119.094C56.361 119.065 56.3549 119.035 56.3549 119.004C56.3549 118.973 56.361 118.942 56.3728 118.914C56.3847 118.885 56.4021 118.859 56.424 118.837C56.446 118.815 56.472 118.798 56.5006 118.786C56.5293 118.774 56.5599 118.768 56.5909 118.769H69.5325C69.5635 118.768 69.5942 118.774 69.6228 118.786C69.6514 118.798 69.6775 118.815 69.6994 118.837C69.7213 118.859 69.7387 118.885 69.7506 118.914C69.7625 118.942 69.7686 118.973 69.7686 119.004C69.7686 119.035 69.7625 119.065 69.7506 119.094C69.7387 119.123 69.7213 119.149 69.6994 119.171C69.6775 119.192 69.6514 119.21 69.6228 119.221C69.5942 119.233 69.5635 119.239 69.5325 119.239Z'
							fill='#CBCBCB'
						/>
					</g>
					<defs>
						<clipPath id='clip0_1_343'>
							<rect
								width='200'
								height='152.165'
								fill='white'
							/>
						</clipPath>
					</defs>
				</svg>

				<div className='flex gap-[20px]'>
					<h1 className='translate-x-[18px] font-[600] text-[22px]'>Explora</h1>
					<svg
						width='42'
						height='18'
						viewBox='0 0 42 18'
						fill='none'
						className='translate-x-[10px] translate-y-[10px]'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							className='svg'
							d='M1.08228 8.84812C6.77436 6.62496 10.1929 -2.5374 15.6578 3.15536C21.1227 8.84812 23.8552 11.125 28.8647 10.8974C33.8742 10.6697 40.9331 4.74933 40.9331 4.74933'
							stroke='#F1F1F1'
						/>
						<path
							className='svg'
							d='M1.08228 8.84812C6.77436 6.62496 10.1929 -2.5374 15.6578 3.15536C21.1227 8.84812 23.8552 11.125 28.8647 10.8974C33.8742 10.6697 40.9331 4.74933 40.9331 4.74933'
							stroke='#F1F1F1'
						/>
						<path
							className='svg'
							d='M1.08228 12.0364C6.77436 9.81319 10.1929 0.650834 15.6578 6.34359C21.1227 12.0363 23.8552 14.3133 28.8647 14.0856C33.8742 13.8579 40.9331 7.93756 40.9331 7.93756'
							stroke='#9292FD'
						/>
						<path
							className='svg'
							d='M1.08228 12.0364C6.77436 9.81319 10.1929 0.650834 15.6578 6.34359C21.1227 12.0363 23.8552 14.3133 28.8647 14.0856C33.8742 13.8579 40.9331 7.93756 40.9331 7.93756'
							stroke='#9292FD'
						/>
						<path
							className='svg'
							d='M1.08228 15.2243C6.77436 13.0012 10.1929 3.83882 15.6578 9.53158C21.1227 15.2243 23.8552 17.5013 28.8647 17.2736C33.8742 17.0459 40.9331 11.1256 40.9331 11.1256'
							stroke='#F1F1F1'
						/>
						<path
							className='svg'
							d='M1.08228 15.2243C6.77436 13.0012 10.1929 3.83882 15.6578 9.53158C21.1227 15.2243 23.8552 17.5013 28.8647 17.2736C33.8742 17.0459 40.9331 11.1256 40.9331 11.1256'
							stroke='#F1F1F1'
						/>
					</svg>
				</div>
			</div>
		</main>
	);
}
