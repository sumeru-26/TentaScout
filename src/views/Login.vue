<script setup>

    import { ref } from 'vue'

    import { SCOUTALLIANCE_API_URL } from '@/utils/globals'

    import { Button } from '@/components/ui/button'
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'

    const manualCodeInput = ref('')

    async function login(code) {
        const decoded = atob(code)
        // console.log(decoded)
        const [key, event, type] = decoded.split(' ')
        // try {
        //     console.log(key)
        //     const schemaResponse = await fetch(SCOUTALLIANCE_API_URL + '/schemas/get?' + new URLSearchParams({
        //         event: event,
        //         type: type
        //     }), {
        //         method: 'GET',
        //         mode: 'no-cors',
        //         headers: {
        //             'X-SA-Auth-Key': key,
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     console.log(await schemaResponse.text())
        //     const schema = await schemaResponse.json()
        //     console.log(schema)
        // } catch (error) {
        //     console.log(error.message)
        // }
        const response = await fetch(SCOUTALLIANCE_API_URL + '/', {
            mode: 'no-cors',
            headers: {
                'X-SA-Auth-Key': 'asdf'
            }
        })
    }

</script>


<template>
    <div class="flex flex-row min-h-screen justify-center items-center">
        <Card class="w-full max-w-sm">
            <CardHeader>
            <CardTitle class="text-2xl">
                Login
            </CardTitle>
            <CardDescription>
                Enter code or scan QR code
            </CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4">
            <div class="grid gap-2">
                <Label for="code">Manual code</Label>
                <Input id="code" type="text" placeholder="[ code format ]" required v-model="manualCodeInput" />
            </div>
            </CardContent>
            <CardFooter>
            <Button @click.stop.prevent="login(manualCodeInput)" class="w-full">
                Sign in
            </Button>
            </CardFooter>
        </Card>
    </div>
</template>