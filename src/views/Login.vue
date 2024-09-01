<script setup>

    import { Button } from '@/components/ui/button'
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'

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
                <Input id="code" type="text" placeholder="[ code format ]" required />
            </div>
            </CardContent>
            <CardFooter>
            <Button class="w-full">
                Sign in
            </Button>
            </CardFooter>
        </Card>
    </div>
</template>